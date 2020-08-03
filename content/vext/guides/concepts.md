---
title: Introduction to VeniceEXT concepts
weight: 1
---

In this guide we'll try to explain the various VeniceEXT scripting concepts in order to help you better understand how the scripting engine is structured and how to better utilize it. This guide assumes you're already familiar with how VeniceEXT mods are structured and have read the [Mod structure](/modding/structure/) and [Your first mod](/modding/your-first-mod/) guides.

## Libraries

Libraries are one of the core building blocks of VEXT mods. They are global objects that can be used for different tasks, like math, text processing, player management, etc. They also provide ways to interact with the engine. 

Like with mostly everything else in VEXT, libraries are split into `client`, `server`, and `shared` categories. This means that some libraries are available only for client scripts, some only for server scripts, and some for both. It should be noted that there are libraries that have the same name on the server and the client that will perform similar tasks but might be slightly different.

Let's look at an example of a library and how it's used. In this example we'll look at the [MathUtils](/vext/ref/shared/library/mathutils/) library. This is a shared library which, as we just explained, means it can be used from both server and client scripts. 

```lua
local x = MathUtils:GetRandom(1.0, 15.25)
print(x)
```

Here we're using the [GetRandom](/vext/ref/shared/library/mathutils/#getrandom) method of this library, which returns a random number between the numbers we give it (in this case `1.0` and `15.25`). All library methods are called in the same way: `LibraryName:MethodName(...)`

Here are full listings of all the libraries available on the [client](/vext/ref/client/library/), the [server](/vext/ref/server/library/), and are [shared](/vext/ref/shared/library/).

## Events

Events are a way for the engine to provide information to VEXT scripts and for different VEXT mods to talk with each other. Each event has a specific string name (eg. `Player:Joining`) and a VEXT script can say it wants to receive specific events. Each event can also have data that comes with it. As with everything else, there are events that are only sent to `client` scripts, `server` scripts, or both (`shared`).

Let's look at an example of the event we mentioned above:

```lua
Events:Subscribe('Player:Joining', function(name, playerGuid, ipAddress, accountGuid)
  print('Player "' .. name .. '" is joining!')
end)
```

Here, we use the [Events](/vext/ref/shared/library/events/) library to state we want to receive the [Player:Joining](/vext/ref/server/event/player_joining/) event (we should note that this event is only received by server scripts). When a player is joining our server, the function that we passed as the second parameter is going to get called and the text `Player "PlayerName" is joining!` will be printed on the server console (but instead of `PlayerName` we'll see the actual name of the player joining.) You might also notice the `playerGuid`, `ipAddress`, `accountGuid` parameters. These are other things that this event gives us but we don't use in this example. You could however use them too.

Other than the events that are sent to our scripts by the engine, we can also send events ourselves from our own scripts and other scripts can subscribe to them in order to receive them. In the example below we're sending a custom event with the name `MyCustomEvent` and `1`, `2`, `3` as its data:

```lua
Events:Dispatch('MyCustomEvent', 1, 2, 3)
```

For more in-depth information about Events, check out the [Introduction to Events](/vext/guides/events/) guide. It is recommended that you finish reading this guide first as concepts explained further down will be used.

## NetEvents

There's also another type of events called `NetEvents`. These work in a very similar way to events but can be sent over the network from the server to the connected clients (players) or the other way around. These are very useful for sending data between your client and server scripts.

Let's look at an example. We want to send an event from the server to all of our connected clients. On the client script, we first have to say we want to receive this event:

```lua
NetEvents:Subscribe('MyNetEvent', function(data)
  print(data)
end)
```

And then on the server we need to send that event to all connected clients:

```lua
NetEvents:Broadcast('MyNetEvent', 'hello clients!')
```

When the clients receive that event, the function passed in the second parameter will be called and `data` will be printed (which in this case will be `hello clients!`.)

For more in-depth information about NetEvents, check out the [Introduction to NetEvents](/vext/guides/netevents/) guide. It is recommended that you finish reading this guide first as concepts explained further down will be used.

## Hooks

Hooks function in a way similar to events and allow you to directly change how the engine works. You can use hooks to modify engine behavior (eg. to dynamically change the damage of a bullet to a specific body part of a player) and to completely stop engine behavior (eg. stopping UI elements from showing up).

Let's look at an example:

```lua
Hooks:Install('UI:CreateChatMessage', 1, function(hook, message, channelId, playerId, recipientMask, isSenderDead)
    hook:Pass(message .. '!', channelId, playerId, recipientMask, isSenderDead)
end)
```

In this example we install a hook for the [UI:CreateChatMessage](/vext/ref/client/hook/ui_createchatmessage/) client function. The function we pass in as the third parameter will get called every time the UI is about to render a new chat message. When that happens, we pass back all the data the hook received and we add an exclamation mark (`!`) to the end of the chat message. This makes it so every chat message shown in the UI has an exclamation mark at the end. You might notice that we only change the `message` parameter and just pass everything else as-is (like `channelId`, `playerId`, etc.) The reason is because in this example we only want to modify the message and keep everything else as it was. We could of course modify the other parameters too and pass in their modified versions.

For more in-depth information about hooks, check out the [Introduction to Hooks](/vext/guides/hooks) guide. It is recommended that you finish reading this guide first as concepts explained further down will be used.

## Types

The final and most important part of VEXT are its types. Types are very similar to classes in other programming languages (Lua doesn't have classes). Game and engine objects are represented by different types. Each type has a "contract" which defines the data that it has and the operations that can be performed with it. More specifically, it means that every object of a specific type has specific properties (or fields) you can access and / or modify and methods (or functions) you can call on it.

Types are split in two major categories which we'll explain in more detail below.

### VEXT types

The main VEXT types are used to represent different game and scripting objects, like players, entities, etc. As with almost everything else, they are split into types that are only available on the [client](/vext/ref/client/type/), on the [server](/vext/ref/server/type/), and are [shared](/vext/ref/shared/type/).

#### Using types

Let's look at an example of how such a type would be used:

```lua
local player = PlayerManager:GetPlayerByName('kiwidog')

if player ~= nil then
  print(player.name)
  player:BanTemporarily(30, 'Bad dog!')
end
```

In the example above we show a server script in which we use the [PlayerManager](/vext/ref/server/library/playermanager/) library to get a player object for the connected player with the name `kiwidog`. If a player with that name doesn't exist this method will return `nil`, which is why we're checking for it. If they do, we'll get back a [Player](/vext/ref/server/type/player/) object. We then get the [name](/vext/ref/server/type/player/#name) property of that player, print it, and then we call the [BanTemporarily](/vext/ref/server/type/player/#bantemporarily-1) method on them to ban them for `30` seconds with the reason `Bad dog!`.

#### Enum types

There is a "special" kind of type which represents an enumeration, basically a set of possible values. Each value has a unique name and is associated with a numeric value that doesn't have to be unique. The way to use these enum types is as follows:

```lua
Hooks:Install('Soldier:Damage', 1, function(hook, soldier, info, giverInfo)
    if giverInfo ~= nil and giverInfo.damageType == DamageType.Melee then
      print('Someone was meleed.')
    end
end)
```

Here we install a hook for the [Soldier:Damage](/vext/ref/server/hook/soldier_damage/) function and if the `giverInfo` parameter is not `nil` (the documentation tells us it could be) we check to see if its [damageType](/vext/ref/server/type/damagegiverinfo/#damagetype) property, which is of the [DamageType](/vext/ref/shared/type/damagetype/) enum type, corresponds to the `Melee` value. The general syntax for using enum values is `EnumType.ValueName`.

#### Creating objects

Let's look at one more example. This time we'll create an object of a specific type ourselves:

```lua
local a = Vec3(1, 2, 3)
local b = Vec3(4, 5, 6)

local c = a + b
print(c)
```

Here we create two [Vec3](/vext/ref/shared/type/vec3/) objects, which represent 3-dimensional vectors with the given `x`, `y`, and `z` components. We the [add](/vext/ref/shared/type/vec3/#op-add) those two vectors and print the resulting vector.

#### Type inheritance

Some types are based on other types. This means that they inherit all the methods and properties of the types they inherit from all the way down the chain. For example, if type `C` inherits from `B` and `B` inherits from `A` then `C` will have all the methods and properties of both `B` and `A`.

For example, the [SoldierEntity](/vext/ref/server/type/soldierentity/) type (which is the entity type that represents alive players) inherits from [ControllableEntity](/vext/ref/server/type/controllableentity/) which inherits from [PhysicsEntity](/vext/ref/server/type/physicsentity/) which inherits from [GameEntity](/vext/ref/server/type/gameentity/) which inherits from [SpatialEntity](/vext/ref/shared/type/spatialentity/) which finally inherits from the base [Entity](/vext/ref/shared/type/entity/) type. That means that when handling [SoldierEntity](/vext/ref/server/type/soldierentity/) objects you can access all the properties and methods of all of the types listed above. 

#### Casting objects

For our final example, we'll look at casting between different types. In many cases events, hooks, and library methods will give you a more generic type that will then have to be casted to something more specific that inherits from that type. A common use-case for casting is entities, which we show below:

```lua
Events:Subscribe('Vehicle:Destroyed', function(vehicle, vehiclePoints, hotTeam)
  local controllable = ControllableEntity(vehicle)
  print('Vehicle with ' .. tostring(controllable.entryCount) .. ' was destroyed!')
end)
```

Here we subscribe to the [Vehicle:Destroyed](/vext/ref/server/event/vehicle_destroyed/) event which, according to the documentation, gives us a generic [Entity](/vext/ref/shared/type/entity/) type as the first parameter. Here however, because of the event we're subscribing to, we know that this specific entity will be a [ControllableEntity](/vext/ref/server/type/controllableentity/) (which is also something that the documentation tells us) so we cast the [Entity](/vext/ref/shared/type/entity/) we got to it. We can then access the specific properties of this type (in this case [entryCount](/vext/ref/server/type/controllableentity/#entrycount)). The reason a [ControllableEntity](/vext/ref/server/type/controllableentity/) isn't passed directly is because of limitations of how the VEXT scripting engine integrates into the Frostbite engine.

A thing that one should remember, as it can be a bit confusing, is that both object creation and casting use similar syntax (`TypeName(...)`). When using that syntax, passing in any object whose type is in the inheritance tree of the type name being used will result in a cast. Using anything else will result in a new object being created. When reading the documentation you can distinguish between those two as most cases of casted parameter is named `other`.

### Frostbite types

Frostbite has a custom way of representing game metadata, which includes everything from simple variables like how much ammo a gun should have, and extends to describe pretty much everything in a level and how it interacts with each other (eg. what entities to spawn, where, what weapons and vehicles should be available, etc.) VEXT exposes some types (the `Frostbite types`) that represent said metadata to the scripting engine so you can modify them on-demand, without the requirement for modifying game files. Those types are available to both client and server scripts.

Even though we won't go into much detail on how to use said types (that's what the [Introduction to data modifications](/vext/guides/datamod/) guide is for) there are some things we need to explain about them. First and foremost, these types are split into three categories:

#### [Instance types](/vext/ref/fb/#instance-types)

These are the main frostbite metadata types and all inherit from the shared [DataContainer](/vext/ref/shared/type/datacontainer/) class. They can exist on their own and will be passed back and forth by the engine to keep track of how to configure different systems. When an instance object (or just "instance") is passed to a script by the VEXT scripting engine, or when its used as a property in another type, it will usually be passed as a parent type and will then have to be explicitly casted to a more specific type.

#### [Structure types](/vext/ref/fb/#structure-types)

Structure types are free-standing data structures that are usually used as properties of instance types. They cannot have any inheritance (or be inherited from). These structure types also include the shared [Vec2](/vext/ref/shared/type/vec2), [Vec3](/vext/ref/shared/type/vec3), [Vec4](/vext/ref/shared/type/vec4), [LinearTransform](/vext/ref/shared/type/lineartransform), [Guid](/vext/ref/shared/type/guid), and [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox) types.

#### [Enum types](/vext/ref/fb/#enum-types)

Frostbite enum types have the same characteristics as the [enum types](#enum-types) we described before and use the same exact syntax.

## Arrays and Vectors

You'll often see type properties that contain a list (or sequence) of objects instead of a single one. There are two different types of such sequences, they are represented differently in the documentation, and they behave differently when used.

### Arrays

The first sequence is an array. In the documentation it's shown as `TypeName{}`. In VEXT scripts these sequences are read-only lua tables. That means that they are a continous sequence of elements (a list without any gaps or `nil` items), can be accessed using the brackets syntax (`someArray[123]`, remember that indexing in lua starts at `1` and not `0`), and functions of the [table](http://www.lua.org/manual/5.4/manual.html#6.6) lua library can be used on them. Since these tables are read-only, changes to them (eg. via `table.insert(...)`) will not modify the real property.

### Vectors

The other sequence is a vector. In the documentation it's shown as `TypeName[]`. In VEXT scripts these sequence are NOT tables, but work in similar ways. A major difference is that they don't have to be continuous (ie. a vector can contain items that are `nil`). They can still be accessed and iterated similarly to lua tables but cannot be manipulated using the [table](http://www.lua.org/manual/5.4/manual.html#6.6) lua library. Instead, they have their own helper methods for manipulating them:

- `add(value)`: Adds a new value to the end of the vector, similar to `table.insert(...)`. Usage: `someVector:add(newValue)`
- `insert(index, value)`: Inserts a value at the specified index. Usage: `someVector:insert(2, newValue)`
- `erase(index)`: Erases a value at the specified index. Usage: `someVector:erase(2)`
- `clear()`: Erases all the values and empties the vector. Usage: `someVector:clear()`
- `index_of(value)`: Finds the first index of a specific value in the vector. Returns `-1` if the value is not found. Usage: `local idx = someVector:index_of(someValue)`

---

Next, you can read a more in-depth guide on [Events and how to use them](/vext/guides/events/).