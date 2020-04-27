---
title: Player:SpawnOnPlayer
---

> **Player:SpawnOnPlayer**(player: [Player](/vext/ref/server/type/player), playerToSpawnOn: [Player](/vext/ref/server/type/player))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **playerToSpawnOn** | [Player](/vext/ref/server/type/player) |  |

## Example

```lua
Events:Subscribe('Player:SpawnOnPlayer', function(player, playerToSpawnOn)
    -- Do stuff here.
end)
```
