---
title: In-depth NetEvents guide
description: In-depth guide to VeniceEXT NetEvents, which allow for communication between server and client scripts. Find out how to send them, receive them, and use them in more advanced ways.
weight: 3
---

As explained in the [Introduction to VeniceEXT concepts](/vext/guides/concepts/) guide, NetEvents are a way for mods to exchange information between their client-side and server-side scripts over the network. In this guide we'll go in a bit more detail on how NetEvents work and how to use them. Before reading this guide make sure you first have a good understanding of how regular [Events](/vext/guides/events/) work.

## NetEvent structure

Similar to regular Events, every NetEvent is identified by a unique string name and can have some data associated with it. NetEvent names are case sensitive. 

## Subscribing to NetEvents

Subscribing to NetEvents works in a similar way to subscribing to regular Events but with some small differences based on where the NetEvent is being received.

### On the client

To subscribe to a NetEvent on the client we use the [Subscribe](/vext/ref/client/library/netevents/#subscribe) method of the client-side [NetEvents](/vext/ref/client/library/netevents/) library, passing in the name of the event we're interested in receiving.

```lua
NetEvents:Subscribe('MyServerNetEvent', function(data)
  print('Got NetEvent from server with data:')
  print(data)
end)
```

We also pass in a handler function that will get called whenever this NetEvent is received. In this case, when the server sends us the `MyServerNetEvent` NetEvent, the client script will print `Got NetEvent from server with data:` followed by the associated NetEvent data.

### On the server

We subscribe to NetEvents on the server in the same way as the client, but this time using the [Subscribe](/vext/ref/server/library/netevents/#subscribe) method of the server-side [NetEvents](/vext/ref/server/library/netevents/) library. 

```lua
NetEvents:Subscribe('MyClientNetEvent', function(player, data)
  print('Got NetEvent from player ' .. player.name .. ' with data:')
  print(data)
end)
```

The only difference to the client-side version is that the handler function accepts an extra argument as its first argument which signifies the player the event was sent from. That means that the first argument of the handler function will be a [Player](/vext/ref/server/type/player/) object, with the NetEvent data coming after it. In the example above, as soon as our server receives the `MyClientNetEvent` NetEvent from a client, the handler function will be called and `Got NetEvent from player PlayerName with data:` will be printed (but instead `PlayerName` we will see the name of the player who sent that event), followed by the associated NetEvent data.

### NetEvent user data

Similar to regular Events, there are versions of the [Subscribe](/vext/ref/client/library/netevents/#subscribe-1) method that allow us to pass some custom user data that will be provided to our NetEvent handler function alongside all of the NetEvent data as seen in the examples below:

```lua
-- This is a client-side script.
local x = 123

NetEvents:Subscribe('MyServerNetEvent', x, function(userData, data)
  print(x)
end)
```

```lua
-- This is a server-side script.
local x = 123

NetEvents:Subscribe('MyClientNetEvent', x, function(userData, player, data)
  print(x)
end)
```

Both of these examples will print `123` when the respective NetEvents are received. Keep in mind that on the server-side script example, the `userData` is passed before everything else, including the [Player](/vext/ref/server/type/player/) object.

### Stop receiving events

You may want to stop receiving specific NetEvents at some point. There are a few different ways to do that:

#### Using the NetEvent object

When you subscribe to an NetEvent, the [Subscribe](/vext/ref/server/library/netevents/#subscribe) method returns back an object of the [NetEvent](/vext/ref/server/type/netevent/) type. You can store that object and later down the line call the [Unsubscribe](/vext/ref/server/type/netevent/#unsubscribe) method on it like so:

```lua
local netevent = NetEvents:Subscribe(...)

-- Some time later.

netevent:Unsubscribe()
```

After you call that method you will no longer receive that NetEvent and the handler function will never get called again until you subscribe to it again.

#### Unsubscribing by name

You can use the [Unsubscribe](/vext/ref/server/library/netevents/#unsubscribe-1) method of the [NetEvents](/vext/ref/server/library/netevents/) library to stop receiving all NetEvents with a specific name:

```lua
NetEvents:Unsubscribe('MyNetEvent')
```

This will make it so no `MyNetEvent` NetEvents are received by your mod until you explicitly subscribe to them again.


#### Unsubscribing all

You can use the same [Unsubscribe](/vext/ref/server/library/netevents/#unsubscribe) method without passing an event name in to stop receiving all subscribed to NetEvents:

```lua
NetEvents:Unsubscribe()
```

## Sending NetEvents

Now that we know how to listen for NetEvents we also need to see how to send them between the server and the clients or vice-versa. The way we do that differs slightly between the server and the client.

### Server to client

To send a NetEvent from your server scripts to **all** connected clients you must use the [Broadcast](/vext/ref/server/library/netevents/#broadcast) method of the server-side [NetEvents](/vext/ref/server/library/netevents/) library, as seen below.

```lua
NetEvents:Broadcast('MyServerNetEvent', 'hello client!')
```

In this example, the `hello client!` string is the custom data we want to send alongside the `MyServerNetEvent` NetEvent. If on the client-side you use the same subscription code as the [example above](#on-the-client) then the client will print `Got NetEvent from server with data: hello client!`.

Alternatively, you can send a NetEvent to only a specific client by using the [SendTo](/vext/ref/server/library/netevents/#sendto) method and passing in the [Player](/vext/ref/server/type/player/) object for the player you want to send it to:

```lua
local player = PlayerManager:GetPlayerByName('NoFaTe')

if player ~= nil then
  NetEvents:SendTo('MyServerNetEvent', player, 'hello client!')
end
```

In this example, we try to get the [Player](/vext/ref/server/type/player/) object for the connected player with the name `NoFaTe` by using the [GetPlayerByName](/vext/ref/server/library/playermanager/#getplayerbyname) method of the [PlayerManager](/vext/ref/server/library/playermanager/) library, and if that player exists (i.e. if the method doesn't return `nil`) then we send the `MyServerNetEvent` NetEvent specifically to that player with the `hello client!` string as the custom data. This will make it so only this specific player (and their corresponding client-side scripts) will receive this event.

### Client to server

To send a NetEvent from your client scripts to the server you must use the [Send](/vext/ref/client/library/netevents/#send) method of the client-side [NetEvents](/vext/ref/client/library/netevents/) library, as seen below.

```lua
NetEvents:Send('MyClientNetEvent', 'hello server!')
```

In this example we send the `MyClientNetEvent` NetEvent to the server with the `hello server!` string as the custom data. If on the server-side you use the same subscription code as the [example above](#on-the-server) then the server  will print `Got NetEvent from player PlayerName with data: hello server!`.

### Local NetEvents

By default, any NetEvents you send will be received by all loaded mods. As with regular Events, there are `Local` versions of all the NetEvent sending methods that will make it so the NetEvent is only received by your own mod, even if other mods subscribe to it:

- [NetEvents:BroadcastLocal](/vext/ref/server/library/netevents/#broadcastlocal)
- [NetEvents:SendToLocal](/vext/ref/server/library/netevents/#sendtolocal)
- [NetEvents:SendLocal](/vext/ref/client/library/netevents/#sendlocal)

### NetEvent data

You can pass any amount of data you want (or no data) as additional parameters to the [Send](/vext/ref/client/library/netevents/#send), [SendTo](/vext/ref/server/library/netevents/#sendto), and [Broadcast](/vext/ref/server/library/netevents/#broadcast) methods (and their variants), however there are some restrictions to the type of data you can use. More specifically, only the following types are allowed:

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

## NetEvent reliability

By default, when you send NetEvents, they are guaranteed to be received by the receiving end and in the order you sent them.

```lua
NetEvents:Broadcast('MyNetEvent1')
NetEvents:Broadcast('MyNetEvent2')
NetEvents:Broadcast('MyNetEvent3')
```

In the example above, it is guaranteed that all clients will receive these three NetEvents and in the order we sent them, with `MyNetEvent1` being received first, followed by `MyNetEvent2` and `MyNetEvent3`.

This behavior is desirable in general, but it has some negative side-effects. More specifically, because network conditions are not always ideal, some NetEvents might get lost in transit which will force VeniceEXT to keep retrying to send them until they are received by the other side. There's also the case that they are received out-of-order. This means that the receiving side has to wait until everything is received and processed in order before being to process any more NetEvents, which can lead to long delays.

For this reason, VeniceEXT provides two additional reliability modes when sending NetEvents, that allow you to better control this behavior:

### Unreliable NetEvents

By using the `Unreliable` variants of the sending methods ([SendUnreliable](/vext/ref/client/library/netevents/#sendunreliable), [SendUnreliableTo](/vext/ref/server/library/netevents/#sendunreliableto), and [BroadcastUnreliable](/vext/ref/server/library/netevents/#broadcastunreliable)) we tell VeniceEXT that we want absolutely no reliability guarantees. This means that NetEvents sent using those methods are not guaranteed to be received by the receiving side or to be processed in the order they were sent it. They could get lost in transit or received completely out-of-order. If you are lucky, they might get received and be in-order.

### Unreliable ordered NetEvents

By using the `UnreliableOrdered` variants of the sending methods ([SendUnreliableOrdered](/vext/ref/client/library/netevents/#sendunreliableordered), [SendUnreliableOrderedTo](/vext/ref/server/library/netevents/#sendunreliableorderedto), and [BroadcastUnreliableOrdered](/vext/ref/server/library/netevents/#broadcastunreliableordered)) we tell VeniceEXT that we only want ordering guarantees. This means that NetEvents sent using those methods are not guaranteed to be received by the receiving side, but when they are, they will be processed in the order they were sent. 

```lua
NetEvents:BroadcastUnreliableOrdered('MyNetEvent1')
NetEvents:BroadcastUnreliableOrdered('MyNetEvent2')
NetEvents:BroadcastUnreliableOrdered('MyNetEvent3')
```

In the example above, if we assume that `MyNetEvent1` got lost in transit, then `MyNetEvent3` was received, followed by `MyNetEvent2`, only the `MyNetEvent3` will be processed and `MyNetEvent2` will be discarded.

---

Next, you can read a more in-depth guide on [Hooks and how to use them](/vext/guides/hooks/).