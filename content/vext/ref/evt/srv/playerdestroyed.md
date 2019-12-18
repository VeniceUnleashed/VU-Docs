---
title: Player:Destroyed (Server Event)
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player) | player |             |

## Usage Example

``` lua
local function OnPlayerDestroyed(player)
    -- Add your logic here
end

Events:Subscribe('Player:Destroyed', OnPlayerDestroyed)
```
