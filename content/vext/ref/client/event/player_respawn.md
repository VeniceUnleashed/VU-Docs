---
title: Player:Respawn
---

Gets triggered for player spawn and revive.

> **Player:Respawn**(player: [Player](/vext/ref/client/type/player))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/client/type/player) |  |

## Example

```lua
Events:Subscribe('Player:Respawn', function(player)
    -- Do stuff here.
end)
```

