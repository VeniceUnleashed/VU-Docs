---
title: Player:SpawnAtVehicle
---
## Description

## Parameters

| Type                                  | Name    | Description |
| ------------------------------------- | ------- | ----------- |
| [Player](/vext/ref/server/class/player) | player  |             |
| [Entity](/vext/ref/shared/class/entity) | vehicle |             |

## Usage Example

``` lua
local function OnPlayerSpawnAtVehicle(player, vehicle)
    -- Add your logic here
end

Events:Subscribe('Player:SpawnAtVehicle', OnPlayerSpawnAtVehicle)
```
