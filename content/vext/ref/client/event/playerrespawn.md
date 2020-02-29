---
title: Player:Respawn
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/client/class/player) | player |             |

## Usage Example

``` lua
local function OnPlayerRespawn(player)
    -- Add your logic here
end

Events:Subscribe('Player:Respawn', OnPlayerRespawn)
```
