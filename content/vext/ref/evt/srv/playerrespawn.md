---
title: Player:Respawn (Server Event)
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player) | player |             |

## Usage Example

``` lua
local function OnPlayerRespawn(player)
    -- Add your logic here
end

Events:Subscribe('Player:Respawn', OnPlayerRespawn)
```
