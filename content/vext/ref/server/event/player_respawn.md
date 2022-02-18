---
title: Player:Respawn
---

> **Player:Respawn**(player: [Player](/vext/ref/server/type/player))

Gets triggered for player spawn.

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |

## Example

```lua
Events:Subscribe('Player:Respawn', function(player)
    -- Do stuff here.
end)
```
