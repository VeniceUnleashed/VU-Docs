---
title: Events
---
Events are a way to get info of whats happening in the game. In this example we will print the info of players when they spawn. We will subscribe to `Player:Respawn` server event.

### Usage

`Events:Subscribe("Event:Name", function)`

To subscribe to an event you pass its name and a callback function. The callback will be called with the parameters specified for each event:

``` lua
function OnPlayerRespawn(player)
    print("Player name: " .. player.name) -- 
    print("Player id: " .. player.id)
end

Events:Subscribe("Player:Respawn", OnPlayerRespawn)
```

There is a shorthand way to write this using an inline function:

``` lua
Events:Subscribe("Player:Respawn", function(player)
    print("Player name: " .. player.name) -- 
    print("Player id: " .. player.id)
end)
```

### With classes

`Events:Subscribe("Event:Name", instance, function)`

If you are subscribing to an event inside a class, for the callback to call a class function you will have to pass the instance too.

When using classes, your class instances will probably want to know when stuff happens. Instead of events calling a global function, you can give them an instance to call the function on. This is done by passing `self` to `Events:Subscribe` as the second argument. You can store the event to unsubscribe from it later if necessary:

``` lua
class("MyClass")
 
function MyClass:__init()
    self.event = Events:Subscribe("Player:Respawn", self, self.OnPlayerRespawn)
end

function MyClass:OnPlayerRespawn(player)
    print("Player name: " .. player.name) -- 
    print("Player id: " .. player.id)
end

function MyClass:ClearEvents()
    self.event:Unsubscribe()
end
```
