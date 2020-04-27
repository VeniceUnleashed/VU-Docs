---
title: Player:Update
---

> **Player:Update**(player: [Player](/vext/ref/server/type/player), deltaTime: float)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **deltaTime** | float |  |

## Example

```lua
Events:Subscribe('Player:Update', function(player, deltaTime)
    -- Do stuff here.
end)
```
