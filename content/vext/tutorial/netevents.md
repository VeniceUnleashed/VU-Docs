---
title: NetEvents
---
NetEvents are a way communicate between server and clients. Clients can't communicate with other clients.

### Client to Server

##### Client

``` lua
NetEvents:Send("Event:Name", [arg1, arg2, ...])
```

##### Server

``` lua
NetEvents:Subscribe("Event:Name", player, function([arg1, arg2, ...]
    -- Do stuff
end))
```

### Server to Client

##### Server

``` lua
NetEvents:SendTo("Event:Name", player, [arg1, arg2, ...])
```

##### Client

``` lua
NetEvents:Subscribe("Event:Name", function([arg1, arg2, ...]
    -- Do stuff
end))
```

### Server to all clients

##### Server

``` lua
NetEvents:Broadcast("Event:Name", [arg1, arg2, ...])
```

##### Clients

``` lua
NetEvents:Subscribe("Event:Name", function([arg1, arg2, ...]
    -- Do stuff
end))
```

-----

These events are received on all mods that the server is currently running. If you want your mod to be the only one that receives your events you can use the variants:

`SendToLocal`

`SendLocal`

`BroadcastLocal`
