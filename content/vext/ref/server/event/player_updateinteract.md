---
title: Player:UpdateInteract
---

> **Player:UpdateInteract**(player: [Player](/vext/ref/server/type/player), deltaTime: float)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **deltaTime** | float |  |

## Example

```lua
Events:Subscribe('Player:UpdateInteract', function(player, deltaTime)
    -- Do stuff here.
end)
```
