---
title: Introduction to data modifications
description: Find out how to modify Frostbite game data using VeniceEXT to modify game behavior or create new experiences, from modifying weapon stats to creating new maps.
readingTime: true
weight: 9
---

Now that you have a basic understanding of how [Frostbite data is structured and the terminology surrounding it](/vext/guides/data) let's look at how we can use VeniceEXT to use it or modify it. In this guide we'll cover basic modifications and some more advanced use-cases.

## Data representation in VeniceEXT

In the [Frostbite data basics](/vext/guides/data) guide we mentioned partitions and instances. Both of these are represented in VeniceEXT through its type system. More specifically, partitions are represented by the [DatabasePartition](/vext/ref/shared/type/databasepartition/) type and instances by the [DataContainer](/vext/ref/shared/type/datacontainer/) type (and anything that inherits from it). It's pretty common that VeniceEXT will provide you an instance of a specific type as a [DataContainer](/vext/ref/shared/type/datacontainer/) object and then you'll have to cast it to a more specific type. We'll see an example of that below.

## Modifying instances

Let's look at how we can modify instances. Every time the engine loads a partition, the [Partition:Loaded](/vext/ref/shared/event/partition_loaded/) event gets dispatched with a [DatabasePartition](/vext/ref/shared/type/databasepartition/) object passed to it. As we mentioned, the [DatabasePartition](/vext/ref/shared/type/databasepartition/) type represents a Frostbite partition and the instances contained within it. We can iterate through its [instances](/vext/ref/shared/type/databasepartition/#instances) property to go through all the partitions contained within it and modify the one we want.

Let's look at an example where we modify the height ceiling (the max height vehicles can fly to) for any loaded level:

```lua
Events:Subscribe('Partition:Loaded', function(partition)
  for _, instance in pairs(partition.instances) do
    if instance:Is('LevelData') then
      local levelDataInstance = LevelData(instance)

      levelDataInstance:MakeWritable()
      levelDataInstance.maxVehicleHeight = 999999
    end
  end
end)
```

Let's walk through what we're doing in the example above. As we mentioned above, every time a partition is loaded, the [Partition:Loaded](/vext/ref/shared/event/partition_loaded/) event gets called. We register a handler for that event and when it's called we iterate through all the [instances](/vext/ref/shared/type/databasepartition/#instances) contained within the partition. Every instance is of the [DataContainer](/vext/ref/shared/type/datacontainer/) type so we use the [Is](/vext/ref/shared/type/datacontainer/#is) method on it to check if it's a more specific type by passing the name of the type we want to check against. In this case, we check if an instance is of the [LevelData](/vext/ref/fb/leveldata/) type, which is the instance type that contains information about a specific level. If it is, then we cast it to that type so we can later modify its properties.

Now, before we can modify it we need to call the [MakeWritable](/vext/ref/shared/type/datacontainer/#makewritable) method on it. That's because instances loaded from data will by default be read-only (you can also use the [isReadOnly](/vext/ref/shared/type/datacontainer/#isreadonly) property to check but it's not necessary, since [MakeWritable](/vext/ref/shared/type/datacontainer/#makewritable) will just do nothing if the instance is not read-only). After making it writable, we can then modify the [maxVehicleHeight](/vext/ref/fb/leveldata/#maxvehicleheight) property. In this case we're setting it to `999999`, effectively getting rid of the flight ceiling. As calling [MakeWritable](/vext/ref/shared/type/datacontainer/#makewritable) is quite expensive, you should only call it on instance you plan to modify.

Now, keep in mind that you generally want to do changes like these inside a shared script so changes are applied on both the server and the client. In some cases, if we only modify data on one side then players will be kicked upon joining a server because their data will not match.

## Waiting for instances to load

In the example above, we go through every single instance to find the one we need. This can be a bit wasteful at times, so VeniceEXT provides us with a way to notify us when a specific instance has loaded. If you know the Guid of an instance and the Guid of the partition it's in, you can use the [ResourceManager:RegisterInstanceLoadHandler](/vext/ref/shared/library/resourcemanager/#registerinstanceloadhandler) and [ResourceManager:RegisterInstanceLoadHandlerOnce](/vext/ref/shared/library/resourcemanager/#registerinstanceloadhandleronce) library methods to have VeniceEXT call a function you provide as soon as said instance is loaded. Let's look at an example:

```lua
ResourceManager:RegisterInstanceLoadHandler(Guid('707F4A91-B837-47AC-8BEE-5EB614399714'), Guid('A83D8333-F6D5-43AA-BA65-96122FAE8F7C'), function(instance)
  local levelDataInstance = LevelData(instance)

  levelDataInstance:MakeWritable()
  levelDataInstance.maxVehicleHeight = 999999
end)
```

In this example we register a callback for the `XP3_Alborz` [LevelData](/vext/ref/fb/leveldata/) instance by passing the Guid of the partition its contained in as the first parameter, the Guid of the instance itself as the second parameter, and our callback as the third. When this instance gets loaded our function will be called and we'll modify the instance just like we did in the previous example. 

Keep in mind that this callback will remain active until you deregister it (we'll show how to do that below). If you only want the callback to be called the first time an instance loads you can use the [RegisterInstanceLoadHandlerOnce](/vext/ref/shared/library/resourcemanager/#registerinstanceloadhandleronce) method, which will automatically deregister the callback as soon as it's called.

### Deregistering callbacks

Calls to the [RegisterInstanceLoadHandler](/vext/ref/shared/library/resourcemanager/#registerinstanceloadhandler) and [RegisterInstanceLoadHandlerOnce](/vext/ref/shared/library/resourcemanager/#registerinstanceloadhandleronce) methods return a [ContainerCallback](/vext/ref/shared/type/containercallback/) object. If you wish for your callback function to no longer get called when the specified instance gets loaded, you can store that object and call the [Deregister](/vext/ref/shared/type/containercallback/#deregister) method on it as seen below:

```lua
local ctrCb = ResourceManager:RegisterInstanceLoadHandler(...)

-- At some later point.

ctrCb:Deregister()
```

### Callback user data

Similar to event callbacks, you can pass custom user data to the [RegisterInstanceLoadHandler](/vext/ref/shared/library/resourcemanager/#registerinstanceloadhandler-1) and [RegisterInstanceLoadHandlerOnce](/vext/ref/shared/library/resourcemanager/#registerinstanceloadhandleronce-1) method to be passed back to your callback function when it's called:

```lua
local x = 123

ResourceManager:RegisterInstanceLoadHandler(Guid('707F4A91-B837-47AC-8BEE-5EB614399714'), Guid('A83D8333-F6D5-43AA-BA65-96122FAE8F7C'), x, function(userData, instance)
  print(userData)
end)
```

In the example above we pass the variable `x` before the callback function. When the callback function is called, its value will be passed as the first parameter to the callback function (in this case named `userData`) and will be printed (in this case `123` will be printed).

## Lazy-loaded instances

Sometimes when trying to cast an instance from the [DataContainer](/vext/ref/shared/type/datacontainer/) type to something more specific, you may get the following error:

```
cannot cast an instance that's lazy loaded to 'X'
```

That happens for instances that are referenced by other instances but have not yet been loaded by the engine and will be loaded at some point in the future. We call these "lazy-loaded" instances. You can check if an instance is being lazy-loaded by checking the value of the [isLazyLoaded](/vext/ref/shared/type/datacontainer/#islazyloaded) property. Additionally, if you want to be notified when this instance gets loaded, you can use the [RegisterLoadHandler](/vext/ref/shared/type/datacontainer/#registerloadhandler) and [RegisterLoadHandlerOnce](/vext/ref/shared/type/datacontainer/#registerloadhandleronce) methods which work similarly to the [ResourceManager](/vext/ref/shared/library/resourcemanager/) methods we demonstrated above:

```lua
if someInstance.isLazyLoaded then
  someInstance:RegisterLoadHandlerOnce(function(loadedInstance)
    print('Instance has loaded!')
    -- Do something with loadedInstance.
  end)
end
```

In this example, we assume that the `someInstance` variable is a [DataContainer](/vext/ref/shared/type/datacontainer/) object and we check if it's being lazy-loaded. If it is, then we register a callback function to be called once after it's loaded, which will print `Instance has loaded!` as soon as it has.

## Searching for instances

Sometimes you might need to find an instance to use for some purpose (eg. creating an entity). Your first instinct might be to register a [Partition:Loaded](/vext/ref/shared/event/partition_loaded/) event, and store it as soon as you encounter it to use later. However, VeniceEXT provides some tools to look up instances on demand. We'll look at the different ways you can do that.

### Searching by name

Some instances have a name associated to them. These are primarily instances that are of the [Asset](/vext/ref/fb/asset/) type (and any of its derivates). You can use the [ResourceManager:SearchForDataContainer](/vext/ref/shared/library/resourcemanager/#searchfordatacontainer) library method to search for them by their name:

```lua
local instance = ResourceManager:SearchForDataContainer('Levels/XP3_Alborz/XP3_Alborz')
```

In this example, we look up the instance with the name `Levels/XP3_Alborz/XP3_Alborz`, which is the same [LevelData](/vext/ref/fb/leveldata/) instance we were registering a load handler for before. If you look at the dump of this instance you'll see that its [name]() field has a value of `Levels/XP3_Alborz/XP3_Alborz` which is what we're using to look it up.

### Searching by instance Guid

If you know the Guid of an instance you can use the [ResourceManager:SearchForInstanceByGuid](/vext/ref/shared/library/resourcemanager/#searchforinstancebyguid) library method to look it up by it:

```lua
local instance = ResourceManager:SearchForInstanceByGuid(Guid('A83D8333-F6D5-43AA-BA65-96122FAE8F7C'))
```

### Searching by partition & instance Guid

Searching by name or just by instance Guid can be a bit slow. If you know both the partition Guid and the instance Guid you can use the [ResourceManager:FindInstanceByGuid](/vext/ref/shared/library/resourcemanager/#findinstancebyguid) library method to look an instance up a lot faster:

```lua
local instance = ResourceManager:FindInstanceByGuid(Guid('707F4A91-B837-47AC-8BEE-5EB614399714'), Guid('A83D8333-F6D5-43AA-BA65-96122FAE8F7C'))
```

## Creating new instances

Sometimes you may want to create your own instances for a specific purpose (eg. creating a variation of something that already exists or creating something completely new). There are two ways to do that using VeniceXT that we'll explain below.

### Cloning instances

The first and easiest is by cloning an instance that already exists. Cloning essentially creates an exact shallow copy of an instance. Shallow copy is basically the equivalent of creating a new instance of that type and assigning each of its fields to the values of the original instance one-by-one. That means that if you have a field that references another instance, the new instance clone will still point to the same thing instead of cloning the referenced instance as well. You can clone instances by using the [Clone](/vext/ref/shared/type/datacontainer/#clone) method on them, as seen below:

```lua
local clonedInstance = someInstance:Clone()
```

In this example we assume that the `someInstance` variable holds an instance ([DataContainer](/vext/ref/shared/type/datacontainer/) object). The result of the [Clone](/vext/ref/shared/type/datacontainer/#clone) method call (`clonedInstance`) will be a new instance with all the same properties as `someInstance`.

Additionally, you can pass a [Guid](/vext/ref/shared/type/guid/) to the [Clone](/vext/ref/shared/type/datacontainer/#clone-1) method to associated that [Guid](/vext/ref/shared/type/guid/) with the newly created instance. You can also add it to a partition by using the [AddInstance](/vext/ref/shared/type/databasepartition/#addinstance) method of the [DatabasePartition](/vext/ref/shared/type/databasepartition/) type. Doing that allows you to later use that [Guid](/vext/ref/shared/type/guid/) to look it up via the methods we mentioned above or make it discoverable for other mods to use. 

### Creating instances by type

You can also create instances by their type. Every instance type has two constructors: one that takes no arguments and one that takes a [Guid](/vext/ref/shared/type/guid/) as an argument. The latter functions similarly to the [Clone](/vext/ref/shared/type/datacontainer/#clone-1) method we mentioned above, in that it will associate that [Guid](/vext/ref/shared/type/guid/) with the newly created instance. Let's look at an example:

```lua
local data = PointLightEntityData()

data.width = 10
data.color = Vec3(1, 0, 0)
data.radius = 10
data.visible = true
```

In this example we create a new instance of the [PointLightEntityData](/vext/ref/fb/pointlightentitydata/) type and assign some values to some of its properties. We can then use this instance to spawn a point light entity (which we'll cover in the [Entities guide](/vext/guides/entities)).

---

Next up, see how [entities work, how to spawn them, find them, and work with them](/vext/guides/entities/).