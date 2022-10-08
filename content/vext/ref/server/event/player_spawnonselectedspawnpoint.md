---
title: Player:SpawnOnSelectedSpawnPoint
---

> **Player:SpawnOnSelectedSpawnPoint**(player: [Player](/vext/ref/server/type/player), spawnEntity: [Entity](/vext/ref/shared/type/entity))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **spawnEntity** | [Entity](/vext/ref/shared/type/entity) |  |

## Example

```lua
Events:Subscribe('Player:SpawnOnSelectedSpawnPoint', function(player, spawnEntity)
    -- Do stuff here.
end)
```
