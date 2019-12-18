---
title: Player:SpawnAtVehicle (Server Event)
---
## Description

## Parameters

| Type                                  | Name    | Description |
| ------------------------------------- | ------- | ----------- |
| [Player](/vext/ref/cls/srv/player) | player  |             |
| [Entity](/vext/ref/cls/shr/entity) | vehicle |             |

## Usage Example

``` lua
local function OnPlayerSpawnAtVehicle(player, vehicle)
    -- Add your logic here
end

Events:Subscribe('Player:SpawnAtVehicle', OnPlayerSpawnAtVehicle)
```
