---
title: Player:Respawn
---

Gets triggered for player spawn.

> **Player:Respawn**(player: [Player](/vext/ref/server/type/player))

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

## Annotations

- Gets triggered for player spawn and revive.