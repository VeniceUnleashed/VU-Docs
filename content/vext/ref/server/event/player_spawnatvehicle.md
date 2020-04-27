---
title: Player:SpawnAtVehicle
---

> **Player:SpawnAtVehicle**(player: [Player](/vext/ref/server/type/player), vehicle: [Entity](/vext/ref/shared/type/entity))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **vehicle** | [Entity](/vext/ref/shared/type/entity) |  |

## Example

```lua
Events:Subscribe('Player:SpawnAtVehicle', function(player, vehicle)
    -- Do stuff here.
end)
```
