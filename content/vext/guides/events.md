---
title: Introduction to Events
weight: 2
---

As explained in the [Introduction to VeniceEXT concepts](/vext/guides/concepts/) guide, Events are a way for the engine to provide information to VeniceEXT scripts and for different scripts and mods to talk with each other. In this guide we'll go in a bit more detail on how events work and how to use them.

## Event structure

Every event is identified by a unique string name and can have some data associated with it. Event names are case sensitive. For example, the [Player:Joining](/vext/ref/server/event/player_joining/) event carries with it the name of the player who's joining and other information like their account identifier and IP address. Events that the VeniceEXT engine sends are split into [client](/vext/ref/client/event/), [server](/vext/ref/server/event/), and [shared](/vext/ref/shared/event/) categories meaning that some are only received by `client` scripts, some only by `server` scripts and others by both (`shared`).

## Subscribing to events

By subscribing to an event you state to the engine that you want to receive that event. That works by using the [Events](/vext/ref/shared/library/events/) library, stating which event we're interested in, and giving it a handler function to call when said event gets sent.

Let's look at an example of the event we mentioned above:

```lua
Events:Subscribe('Player:Joining', function(name, playerGuid, ipAddress, accountGuid)
  print('Player "' .. name .. '" is joining!')
end)
```

The code above is the functional equivalent of the code below, but using an inline function definition instead of a named function. Both are perfectly valid:

```lua
local function OnPlayerJoining(name, playerGuid, ipAddress, accountGuid)
  print('Player "' .. name .. '" is joining!')
end

Events:Subscribe('Player:Joining', OnPlayerJoining)
```

In these examples we use the [Subscribe](/vext/ref/shared/library/events/#subscribe) method of the [Events](/vext/ref/shared/library/events/) library to say we want to receive the [Player:Joining](/vext/ref/server/event/player_joining/) event (we should note that this event will only get sent to server-side scripts). When a player joins, the function we provided will get called and the name of the player will be printed. This event also provides us with `playerGuid`, `ipAddress`, and `accountGuid` which we could also use.

### Event user data

There is a version of the [Subscribe](/vext/ref/shared/library/events/#subscribe-1) method that allows us to pass some custom user data that will be provided to our event handler function alongside all of the event data as seen in the example below:

```lua
local x = 123

Events:Subscribe('Player:Joining', x, function(userData, name, playerGuid, ipAddress, accountGuid)
  print(userData)
end)
```

What we're doing here is that we're passing the `x` variable into the [Subscribe](/vext/ref/shared/library/events/#subscribe-1) method right before our handler function. The `x` variable represents our user data in this case. When a player is joining and the handler function gets called, `x` will be passed in as the first argument in the function (in this case `userData`) and `123` will get printed. You can pass in anything you want as user data making this especially useful for cases where you need to maintain some context relevant to the event you are receiving.

### Stop receiving events

You may want to stop receiving specific events at some point. There are a few different ways to do that:

#### Using the Event object

When you subscribe to an event, the [Subscribe](/vext/ref/shared/library/events/#subscribe) method returns back an object of the [Event](/vext/ref/shared/type/event/) type. You can store that object and later down the line call the [Unsubscribe](/vext/ref/shared/type/event/#unsubscribe) method on it like so:

```lua
local event = Events:Subscribe(...)

-- Some time later.

event:Unsubscribe()
```

After you call that method you will no longer receive that event and the handler function will never get called again until you subscribe to it again.

#### Unsubscribing by name

You can use the [Unsubscribe](/vext/ref/shared/library/events/#unsubscribe-1) method of the [Events](/vext/ref/shared/library/events/) library to stop receiving all events with a specific name:

```lua
Events:Unsubscribe('Player:Joining')
```

This will make it so no [Player:Joining] events are received by your mod until you explicitly subscribe to them again.


#### Unsubscribing all

You can use the same [Unsubscribe](/vext/ref/shared/library/events/#unsubscribe) method without passing an event name in to stop receiving all subscribed to events:

```lua
Events:Unsubscribe()
```

## Custom events

Other than the events that are sent to our scripts by the engine, we can also send and receive our own custom events. Custom events can be sent between your own scripts but also between different mods. To send a custom event you just need to use the [Dispatch](/vext/ref/shared/library/events/#dispatch) method of the [Events](/vext/ref/shared/library/events/) library as seen below:

```lua
Events:Dispatch('MyCustomEvent', 1, 2, 3)
```

And then receive that event like you would any other:

```lua
Events:Subscribe('MyCustomEvent', function(a, b, c)
  print(a)
  print(b)
  print(c)
end)
```

In this example we're sending a custom event with the name `MyCustomEvent` and the values `1`, `2`, `3` as its data. When that event gets received, the handler function will print `1`, `2`, and `3`.

You can pass any amount of data you want, however there are some restrictions to the type of data you can use. More specifically, only the following types are allowed:

- Lua numbers
- Lua strings
- Lua booleans
- `nil`
- [Vec2](/vext/ref/shared/type/vec2/) objects
- [Vec3](/vext/ref/shared/type/vec3/) objects
- [Vec4](/vext/ref/shared/type/vec4/) objects
- [LinearTransform](/vext/ref/shared/type/lineartransform/) objects
- [Guid](/vext/ref/shared/type/guid/) objects
- [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox/) objects
- [QuatTransform](/vext/ref/shared/type/quattransform/) objects
- [Quat](/vext/ref/shared/type/quat/) objects
- Lua tables with keys and values of any of the above types (or other tables)

### Local events

When you use the [Dispatch](/vext/ref/shared/library/events/#dispatch) method you send an event to all of the currently loaded mods. This is useful for communicating information to them in response to functionality specific to your mod. However, this may not always be necessary. In those cases, you can use the [DispatchLocal](/vext/ref/shared/library/events/#dispatchlocal) method which will send the event only to your own mod:

```lua
Events:DispatchLocal('MyCustomEvent', 1, 2, 3)
```

Even if other mods subscribe to the `MyCustomEvent` event, they will not receive it when you send it.

---

Next, you can read a more in-depth guide on [NetEvents and how to use them](/vext/guides/netevents/).