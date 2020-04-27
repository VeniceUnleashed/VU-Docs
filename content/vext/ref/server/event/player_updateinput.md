---
title: Player:UpdateInput
---

> **Player:UpdateInput**(player: [Player](/vext/ref/server/type/player), deltaTime: float)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **deltaTime** | float |  |

## Example

```lua
Events:Subscribe('Player:UpdateInput', function(player, deltaTime)
    -- Do stuff here.
end)
```
