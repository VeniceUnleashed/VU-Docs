---
title: Dealing with entities
description: Information on how entities work, how to spawn them, find them, and work with them.
readingTime: true
weight: 10
---

Entities in Frostbite are representations of in-game objects. Pretty much everything in the world is an entity. Some entities are visible (eg. a box that's on the ground) and some are not (eg. an entity that drives ticket counting logic). VeniceEXT gives you some tools to work with the entities that are created by the game and also create your own.

## Entity basics

### Entity types

Every entity in the game is represented in VeniceEXT using the shared [Entity](/vext/ref/shared/type/entity/) type. Then, similar to instance types, there are several more specific entity types. One you'll probably encounter often is the [SpatialEntity](/vext/ref/shared/type/spatialentity/), which is a type of entity that is placed at a specific position in the world. VeniceEXT represents many of the basic entity types that are the building blocks for all other entities, and also some very specific entities, like [SoldierEntity](/vext/ref/client/type/soldierentity/). Since there are way too many types of entities (refer to [here](/vext/entities/) for a full listing), only commonly used ones are represented in VeniceEXT. If an entity type you want to work with is not implemented, you can request it by opening an issue on our [public issue tracker](https://github.com/EmulatorNexus/VeniceUnleashed/issues).

A thing to keep in mind is that the name of a VeniceEXT entity type will not always fully match the actual name of the entity type. For example, the client-side [SoldierEntity](/vext/ref/client/type/soldierentity/) type represents the `ClientSoldierEntity` type and the server-side [SoldierEntity](/vext/ref/server/type/soldierentity/) type represents the `ServerSoldierEntity` type. 

As with instance types, VeniceEXT will usually provide you with a generic [Entity](/vext/ref/shared/type/entity/) object and then you'll have to cast it to something more specific to be able to work with it. Similarly to instances, there is an [Is](/vext/ref/shared/type/entity/#is) method you can use to determine if an entity is of a specific type (or sub-type), but a thing to note is that this method accepts the name of the actual entity and not the VeniceEXT entity type. This means that you would do `entity:Is('ClientSoldierEntity')` instead of `entity:Is('SoldierEntity')` to determine if this entity is a soldier entity on the client and then cast it to the client-side [SoldierEntity](/vext/ref/client/type/soldierentity/) type. Alternatively, you can also do `entity:Is(SoldierEntity.typeInfo.name)`.

### Entity data

In order to create an entity, the engine needs to be provided with some entity data which it can use to determine what type of entity to create and how it should make it behave. This data is represented by the Frostbite instance type [EntityData](/vext/ref/fb/entitydata/) and its more specific implementations. Then, for many entity types, we can access that data via the [data](/vext/ref/shared/type/entity/#data) field of the [Entity](/vext/ref/shared/type/entity/) type.

For example, in order to create a `ClientPointLightEntity`, the engine has to be provided with a [PointLightEntityData](/vext/ref/fb/pointlightentitydata/) object describing things like the light's color, radius, position, etc. We'll show an example of how that works in VeniceEXT [below](#creating-entities).

## Modifying entities at spawn

First, let's look at how we can perform simple modifications to entities as they get spawned. To do this we'll need to use the [EntityFactory:Create](/vext/ref/client/hook/entityfactory_create/) hook. Though this hook we can modify a few different things, like the entity data that's used to create the entity, the position the entity will be placed at in the world, and even replace the entity with a completely different one of our choice. Let's look at a simple example:

```lua
Hooks:Install('EntityFactory:Create', 100, function(hookCtx, entityData, transform)
  if entityData:Is('SpotLightEntityData') then
    entityData:MakeWritable()
    entityData.castShadowsEnable = true
    entityData.castShadowsMinLevel = QualityLevel.QualityLevel_Low

    hookCtx:Pass(entityData, transform)
  end
end)
```

What we do in the above hook is that we check if the `entityData` that's used to create an entity is of the [SpotLightEntityData](/vext/ref/fb/spotlightentitydata/) type (which is the type that represents spot light entities, as should be obvious), and if it is, we modify it so the created spot light casts shadows on all graphics quality settings (Low and higher) via the [castShadowsEnable](/vext/ref/fb/spotlightentitydata/#castshadowsenable) and [castShadowsMinLevel](/vext/ref/fb/spotlightentitydata/#castshadowsminlevel) properties. We then [Pass](/vext/ref/shared/type/hookcontext/#pass) it back to the engine to perform the entity creation with our custom data. You might also notice we call the [MakeWritable](/vext/ref/shared/type/datacontainer/#makewritable) method on the data. That's because this instance could be originating from game data, and as we explained before, those can be read-only.

### Preventing entities from being created

Using this hook, you can also prevent entities from being created entirely. All you need to do that is to call the [Return](/vext/ref/shared/type/hookcontext/#return-1) method on the hook context and pass `nil` into it, effectively bypassing the creation of the entity by the engine and instead returning `nil`:

```lua
Hooks:Install('EntityFactory:Create', 100, function(hookCtx, entityData, transform)
  if entityData:Is('SpotLightEntityData') then
    hookCtx:Return(nil)
  end
end)
```

In this example, we prevent the engine from spawning **any** spot light entity. Keep in mind that in some cases this can result to crashes or other issues, as some other part of the game (eg. another entity) might rely on some other entity being created.

### Getting the created entity

From this hook you can also get the entity that was created by using the [Call](/vext/ref/shared/type/hookcontext/#call) method on the hook context and getting its return value, as seen below:

```lua
Hooks:Install('EntityFactory:Create', 100, function(hookCtx, entityData, transform)
  local createdEntity = hookCtx:Call()
  -- Do something with createdEntity.
end)
```

The returned value will either be `nil` (if someone prevented the entity from being created or there was something wrong with the data passed in and the engine failed to create it) or an object of the [Entity](/vext/ref/shared/type/entity/) type. 

Let's look at another example where we use an entity after its created.

```lua
Hooks:Install('EntityFactory:Create', 100, function(hookCtx, entityData, transform)
  local createdEntity = hookCtx:Call()
  
  if createdEntity ~= nil and createdEntity:Is(SpatialEntity.typeInfo.name) then
    local spatialEntity = SpatialEntity(createdEntity)
    print(spatialEntity.transform)
  end
end)
```

In the example above, as soon as an entity is created, we check if its of the `SpatialEntity` type (or one of its derived types) by using the [Is](/vext/ref/shared/type/entity/#is) method (similar to how we check [DataContainer](/vext/ref/shared/type/datacontainer/) types). If it is, then we cast it to the more specific VeniceEXT [SpatialEntity](/vext/ref/shared/type/spatialentity/) type and print its [transform](/vext/ref/shared/type/spatialentity/#transform) property, which corresponds to its position in the world.

> In this case you may notice we get the name from the [typeInfo](/vext/ref/shared/type/spatialentity/#typeinfo-static) static member of the [SpatialEntity](/vext/ref/shared/type/spatialentity/) type. That's because, as we mentioned before, entity names do not always match the names of their corresponding VeniceEXT types, and the [name](/vext/ref/shared/type/typeinformation/#name) field of the [typeInfo](/vext/ref/shared/type/spatialentity/#typeinfo-static) member will always give us the right name to check against, regardless of whether we are on the server or the client.


## Finding entities

Now, imagine that you want to find an entity while the game is already running, after the entity has already been created. There are a few different ways to do that using the [EntityManager](/vext/ref/shared/library/entitymanager/) library.

### Finding entities by type

The first way is to find all entities of a specific type by using the [GetIterator](/vext/ref/shared/library/entitymanager/#getiterator) method of the [EntityManager](/vext/ref/shared/library/entitymanager/) library. By passing an entity type name into that method we get back an [EntityIterator](/vext/ref/shared/type/entityiterator/) object which we can use to go through all the entities of that type, as seen below:

```lua
local it = EntityManager:GetIterator('SpotLightEntity')

local entity = it:Next()

while entity ~= nil do
  -- Do something with entity.
  entity = it:Next()
end
```

In this example, we go through all the entities of the `SpotLightEntity` type that are currently spawned in the level. Calling the [Next](/vext/ref/shared/type/entityiterator/#next) method gives us the next entity in order and returns `nil` as soon as we have went through all of them.

### Going through all entities

We can also go through all entities in the level, regardless of their type, by using the [TraverseAllEntities](/vext/ref/shared/library/entitymanager/#traverseallentities) method. This method works by passing a callback function into it that will be called for every entity in the level, with said entity passed to it as a parameter, as seen below:

```lua
EntityManager:TraverseAllEntities(function(entity)
  -- Do something with entity.
end)
```

If at some point you wish to stop the traversal, you can return `false` from your callback function. Similarly to all other places that use callbacks in VeniceEXT, you can pass custom user data [before the callback](/vext/ref/shared/library/entitymanager/#traverseallentities-1) for it to be passed back into your function.

## Creating entities

Now let's look at how we can create entities. To do that we need to use the [CreateEntity](/vext/ref/shared/library/entitymanager/#createentity) method of the [EntityManager](/vext/ref/shared/library/entitymanager/) library and pass in the entity data for the entity we want to create. Let's look at an example:

```lua
local entityData = PointLightEntityData()
entityData.color = Vec3(1.0, 0.0, 0.0)
entityData.radius = 10.0
entityData.intensity = 1.0
entityData.visible = true
entityData.enlightenEnable = false

local entityPos = LinearTransform()
entityPos.trans = Vec3(0.0, 0.0, 0.0)

local createdEntity = EntityManager:CreateEntity(entityData, entityPos)

if createdEntity ~= nil then
  createdEntity:Init(Realm.Realm_ClientAndServer, true)
end
```

In the example above we create a `PointLightEntity` by creating a [PointLightEntityData](/vext/ref/fb/pointlightentitydata/) instance for it and specifying that it should emit red-colored light at a radius of 10 units. We also create a world transform for it (`entityPos`) and specify it should be spawned at world position `(0.0, 0.0, 0.0)`. We then use the [EntityManager:CreateEntity](/vext/ref/shared/library/entitymanager/#createentity) library method, passing in both the entity data and the world transform, to create the entity. We then check the return value against `nil`, just in case entity creation failed, and if it isn't `nil` we use the [Init](/vext/ref/shared/type/entity/#init) method to initialize the entity. 

All this will end up spawning a point light at position `0, 0, 0` in the world (which we most likely won't be able to see), but you can of course spawn it at any position. If at some point later down the line we want to get rid of it, we can destroy the entity by calling the [Destroy](/vext/ref/shared/type/entity/#destroy) method on it, as seen below:

```lua
createdEntity:Destroy()
```

### Spawning from existing data

In the example above we created our own data and created an entity with it. We can however also use existing entity data that the game has already loaded. In the example below we'll assume that we're currently in the `Ziba Tower` level and we'll try to spawn a bar stool model.

```lua
local entityData = ResourceManager:SearchForInstanceByGuid(Guid('F4D1EA24-5C04-11E1-B19F-F6A9A226D16E'))

if entityData ~= nil then
  local entityPos = LinearTransform()
  entityPos.trans = Vec3(0.0, 0.0, 0.0)

  local createdEntity = EntityManager:CreateEntity(entityData, entityPos)

  if createdEntity ~= nil then
    createdEntity:Init(Realm.Realm_ClientAndServer, true)
  end
end
```

In this example we search for the instance with Guid `F4D1EA24-5C04-11E1-B19F-F6A9A226D16E` which is the [StaticModelEntityData](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/XP2/Objects/SkybarBarStool_01/SkybarBarStool_01.txt#L222) for the bar stool that's used throughout Ziba Tower. Then, we proceed to spawn it like we did before. As we mentioned above, this specific instance is only available in the Ziba Tower level, so when you're trying to spawn entities from existing data make sure that data exists in the level you're currently in.

### Entity variations

Entities that represent in-game props / models can have different variations. Each variation is basically a different skin for the model with different textures and / or materials. Each level has its own variations that are stored in a [MeshVariationDatabase](/vext/ref/fb/meshvariationdatabase/) instance, like the one for `Ziba Tower` found [here](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Levels/XP2_Skybar/XP2_Skybar/MeshVariationDb_Win32.txt).

Each variation is identified by a number (the [variationAssetNameHash](/vext/ref/fb/meshvariationdatabaseentry/#variationassetnamehash)) and when spawning an entity in VeniceEXT, we can specify the specific variation we want to use. For example, we can see that one of the wall panel props in `Ziba Tower` has three different variations ([1](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Levels/XP2_Skybar/XP2_Skybar/MeshVariationDb_Win32.txt#L584), [2](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Levels/XP2_Skybar/XP2_Skybar/MeshVariationDb_Win32.txt#L597), [3](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Levels/XP2_Skybar/XP2_Skybar/MeshVariationDb_Win32.txt#L610)). To spawn this prop with the second variation for example, we would have to do this:

```lua
local entityData = ResourceManager:SearchForInstanceByGuid(Guid('54651D38-646E-11E1-82CE-A46E212BD724'))

if entityData ~= nil then
  local creationParams = EntityCreationParams()
  creationParams.transform.trans = Vec3(0.0, 0.0, 0.0)
  creationParams.variationNameHash = 1212109545

  local createdEntity = EntityManager:CreateEntity(entityData, creationParams)

  if createdEntity ~= nil then
    createdEntity:Init(Realm.Realm_ClientAndServer, true)
  end
end
```

In the example above we first find [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/) for that wall panel we mentioned above, and then we use a version of the [CreateEntity](/vext/ref/shared/library/entitymanager/#createentity-1) method which, instead of a [LinearTransform](/vext/ref/shared/type/lineartransform/), accepts an [EntityCreationParams](/vext/ref/shared/type/entitycreationparams/) object as the second parameter. We create a new object of that type, set the world transform of where the entity should be placed in the [transform](/vext/ref/shared/type/entitycreationparams/#transform) property, and then we specify the number of the variation we want to use in the [variationNameHash](/vext/ref/shared/type/entitycreationparams/#variationnamehash) field. Keep in mind that the game might crash if you try to spawn an entity with a variation that doesn't exist or isn't specified in the mesh variation database for the level you're in.

## Entity events & properties

Now that you know how to find and create entities let's look at two more entity features: events and properties.

### Entity events

Every entity can receive so-called events. Every event is identified by its string name, and the hashed version of that name (which means a number that represents that name). These are several different types of entity events, each represented in VeniceEXT by a different type, but the simplest one is [EntityEvent](/vext/ref/shared/type/entityevent/) and has no data associated with it.

Every entity type can receive a different set of events (if any) and each does something different. For example, a `CharacterAnimationEntity` can receive `Start` and `Stop` events to start and stop its animation accordingly. You can find a list of documented events for each entity in the [entity listing page](/vext/entities/). 

Let's look at an example of sending events to entities:

```lua
entity:FireEvent('SomeEventName')
```

That's it! You just need to call the [FireEvent](/vext/ref/shared/type/entity/#fireevent) method on the entity object you want to send the event to and pass in a string with the name of the event. You can also pass in an [EntityEvent](/vext/ref/shared/type/entityevent/) object (or one of its derived types) for more specific types of events, as seen below:

```lua
local event = ClientPlayerEvent('SomeEventName', PlayerManager:GetLocalPlayer())
entity:FireEvent(event)
```

In this example we create a [ClientPlayerEvent](/vext/ref/client/type/clientplayerevent/) with the name `SomeEventName` and our local player as the player associated with that event. We then send that event to the entity like before.

### Entity properties

Some entities have properties that we can modify. Property modifications work similarly to events, in that each property is identified by a string name and the hashed version of it, with the difference that a property is associated with data. We can modify a property of an entity by using the [PropertyChanged](/vext/ref/shared/type/entity/#propertychanged) method on an [Entity](/vext/ref/shared/type/entity/) object, as seen below:

```lua
entity:PropertyChanged('SomeProperty', someValue)
```

Right now only the following types of properties and value types are supported (for the entities that support them):

| Property name | Value type |
| ------------- | ---------- |
| `Transform` | [LinearTransform](/vext/ref/shared/type/lineartransform/) |
| `ControllableTransform` | [LinearTransform](/vext/ref/shared/type/lineartransform/) |
| `TransformIn` | [LinearTransform](/vext/ref/shared/type/lineartransform/) |
| `Enabled` | `bool` |
| `BoolValue` | `bool` |
| `Visible` | `bool` |
| `BoolIn` | `bool` |
| `IntValue` | `int` |
| `IntIn` | `int` |
| `FloatValue` | `float` |
| `FloatIn` | `float` |
| `Vec3In` | [Vec3](/vext/ref/shared/type/vec3/) |
| `Vec4In` | [Vec4](/vext/ref/shared/type/vec4/) |
| `Team` | [TeamId](/vext/ref/fb/teamid/) |

## Entity callbacks

VeniceEXT provides you with a way to be notified of and manage different entity behaviors, similar to hooks. This is possible via the various `RegisterXCallback` methods on the various entity types. Remember the events you can send to entities we were just talking about? You could for example register a callback to be notified every time an event is sent to a specific entity and handle it accordingly, as seen below. That way you can create your own custom behaviors for an entity.

```lua
entity:RegisterEventCallback(function(ent, entityEvent)
  print('Received entity event of type ' .. entityEvent.type .. ' and id: ' .. tostring(entityEvent.eventId))
end)
```

The function we pass to [RegisterEventCallback](/vext/ref/shared/type/entity/#registereventcallback) will be called every time this specific entity receives an event, with the entity itself passed as the first parameter (`ent == entity`) and an [EntityEvent](/vext/ref/shared/type/entityevent/) object as the second one. We can also return `false` from that callback to prevent the event from being further processed by the engine. This pattern applies to all entity callbacks. Similar to all other places where you can register callbacks, there is a version of the [method](/vext/ref/shared/type/entity/#registereventcallback-1) which accepts user data before the callback to be passed back into the callback when called.

### Unregistering callbacks

If you want your callback to stop being called, you can store the return value of the `RegisterXCallback` call and then later pass it to a call to the `UnregisterXCallback` method, as seen below:

```lua
local cbHandle = entity:RegisterEventCallback(...)

-- At some later point:
entity:UnregisterEventCallback(cbHandle)
```

## Blueprints and the EntityBus

Now that we know some things about entities and their data let's talk about blueprints. Blueprints are a way to represent more complex entities. You can think of them as multiple entities combined into one, with additional functionality tied to them, as a sort of preset. In other engines blueprints are commonly referred to as prefabs. The [Blueprint](/vext/ref/fb/blueprint/) instance type is the building block for these, similar to [EntityData](/vext/ref/fb/entitydata/), and after being spawned, it's represented in VeniceEXT by the [EntityBus](/vext/ref/shared/type/entitybus/) type.

### Catching blueprints

We can catch blueprints as they are being created similarly to entities, by using the [EntityFactory:CreateFromBlueprint](/vext/ref/client/hook/entityfactory_createfromblueprint/) hook, as seen below:

```lua
Hooks:Install('EntityFactory:CreateFromBlueprint', 100, function(hookCtx, blueprint, transform, variation, parentRepresentative)
  local newTransform = transform:Clone()
  newTransform.trans.y = newTransform.trans.y + 10

  hookCtx:Pass(blueprint, newTransform, variation)
end)
```

In this example, every time the engine attempts to create entities from a blueprint our hook handler gets called, we create a new transform that's 10 units above the original one, and pass it back to the engine. This will make it so every blueprint that's spawned gets placed 10 units above where it normally should've been. The `blueprint` parameter is the [Blueprint](/vext/ref/fb/blueprint/) data, the `variation` parameter is the id of the object variation to be used (similarly to the entity variations we mentioned [above](#entity-variations)), and the `parentRepresentative` represents the instance that caused this blueprint to be spawned (usually another [Blueprint](/vext/ref/fb/blueprint/) or `nil`).

Just like the entity creation hook, we get the created [EntityBus](/vext/ref/shared/type/entitybus/) by using the [Call](/vext/ref/shared/type/hookcontext/#call) method as seen below:

```lua
Hooks:Install('EntityFactory:CreateFromBlueprint', 100, function(hookCtx, blueprint, transform, variation, parentRepresentative)
  local createdBus = hookCtx:Call()
  -- Do something with createdBus.
end)
```

And we can also prevent it from being spawned by passing `nil` to the [Return](/vext/ref/shared/type/hookcontext/#return-1) call:

```lua
Hooks:Install('EntityFactory:CreateFromBlueprint', 100, function(hookCtx, blueprint, transform, variation, parentRepresentative)
  hookCtx:Return(nil)
end)
```

### Spawning blueprints

We can spawn entities using blueprints in a similar way to how we spawn entities using entity data by using the [EntityManager:CreateEntitiesFromBlueprint](/vext/ref/shared/library/entitymanager/#createentitiesfromblueprint) library method:

```lua
local bp = ResourceManager:SearchForDataContainer('XP2/Objects/SkybarBarStool_01/SkybarBarStool_01')

if bp ~= nil then
  local entityPos = LinearTransform()
  entityPos.trans = Vec3(0.0, 0.0, 0.0)

  local createdBus = EntityManager:CreateEntitiesFromBlueprint(bp, entityPos)

  if createdBus ~= nil then
    for _, entity in pairs(createdBus.entities) do
      entity:Init(Realm.Realm_ClientAndServer, true)
    end
  end
end
```

Remember that bar stool we created [before](#spawning-from-existing-data)? We're spawning the same thing here, but this time we're using a [blueprint](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/XP2/Objects/SkybarBarStool_01/SkybarBarStool_01.txt#L42) that references its entity data. You might be wondering: why have a blueprint for just a single entity? The answer is that in this case there's not really a reason to, but the engine data is organized in a way where almost all entities are set up this way. In our case, it just makes it easier to see what you're spawning since you can look up the blueprint instance by name instead of Guid, which improves code readability. After calling the [CreateEntitiesFromBlueprint](/vext/ref/shared/library/entitymanager/#createentitiesfromblueprint) method we get back either `nil` if creation failed, or an [EntityBus](/vext/ref/shared/type/entitybus/) object if it was successful. We then iterate the [entities](/vext/ref/shared/type/entitybus/#entities) property, which contains all the entities that were created by this blueprint, and initialize each entity.

### Networked entities

Some types of blueprint-created entities are networked. This means that when you spawn them on the server they also get spawned on the clients and are synchronized. Vehicles for example as such entities. We can create these as seen below:

```lua
local bp = ResourceManager:SearchForDataContainer('Vehicles/AH1Z/AH1Z')

if bp ~= nil then
  local creationParams = EntityCreationParams()
  creationParams.transform.trans = Vec3(0.0, 0.0, 0.0)
  creationParams.networked = true

  local createdBus = EntityManager:CreateEntitiesFromBlueprint(bp, creationParams)

  if createdBus ~= nil then
    for _, entity in pairs(createdBus.entities) do
      entity:Init(Realm.Realm_ClientAndServer, true)
    end
  end
end
```

In this example we are spawning the [AH1Z](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Vehicles/AH1Z/AH1Z.txt#L6279) helicopter (keep in mind that this doesn't exist on all maps). The only difference to the previous example is that instead of passing a [LinearTransform](/vext/ref/shared/type/lineartransform/) we're passing an [EntityCreationParams](/vext/ref/shared/type/entitycreationparams/) object with its [networked](/vext/ref/shared/type/entitycreationparams/#networked) property set to `true`. We can do this just on the server and the vehicle will also be automatically spawned on the client. Keep in mind that this doesn't work for all blueprints. The [networked](/vext/ref/shared/type/entitycreationparams/#networked) flags works primarily for blueprints that have the [needNetworkId](/vext/ref/fb/entitybusdata/#neednetworkid) property set to `true`.

### Blueprint connections

If you looked at the data for the [AH1Z blueprint](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Vehicles/AH1Z/AH1Z.txt#L6279) we used above you might've noticed there's a ton of seemingly random data in the [propertyConnections](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Vehicles/AH1Z/AH1Z.txt#L6287), [linkConnections](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Vehicles/AH1Z/AH1Z.txt#L6638), and [eventConnections](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Vehicles/AH1Z/AH1Z.txt#L6664) properties. These are what provide the "additional functionality" we mentioned in the beginning so let's explain what they represent and how they work.

Before we get into more specifics let's talk about what all connections have in common: a source and a target. Each of these is basically a part of the blueprint and represents either an entity, another blueprint, or a component (components are not currently supported in VeniceEXT but will be added soon) that are contained within that blueprint. The way this is presented in the connection instances is by referencing the entity / blueprint / component data in the `Source` and `Target` fields.

#### Property connections

Property connections link a specific property of the source to the target. That means that when that specific property changes on the source, the same value is set for the same (or another) property on the target. For example, [this property connection](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Vehicles/AH1Z/AH1Z.txt#L6353) makes it so the value of the property with id `265440526` (or `IsUnlocked`) of the referenced [UnlockComponentData](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Vehicles/AH1Z/AH1Z.txt#L6012) is linked to the property with id `541013693` (or `AlternateViewEnabled`) of the referenced [CameraComponentData](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Vehicles/AH1Z/AH1Z.txt#L828). This essentially means that if the `IsUnlocked` property is true for that `UnlockComponent`, then `AlternateViewEnabled` will also be true for the `CameraComponent`.

> For a mapping of event ids to their string names you can refer to [this file](http://webx.powback.com/Games/Hash/eventHashes.json).

#### Event connections

Event connections are very similar to property connections, but instead of properties they link events. What this means is that essentially when the source fires an event of a specific type, it sends an event of the same (or a different) type to the target. For example, [this event connection](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Vehicles/AH1Z/AH1Z.txt#L6665) makes it so when the source [WeaponComponent](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Vehicles/AH1Z/AH1Z.txt#L7897) fires the event with id `-1308977461` (or `OnProjectileSpawned`) it fires an event with id `230748069` (or `Start`) on the target [EffectComponent](https://github.com/EmulatorNexus/Venice-EBX/blob/b80b49f6be7010b968eca36654e70819402fa259/Vehicles/AH1Z/AH1Z.txt#L2064). This essentially makes it so when that weapon fires a bullet, it starts playing a specific effect.

---

Next up, read about [the lifetime of DataContainers](/vext/guides/lifetimes/).
