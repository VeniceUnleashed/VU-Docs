---
title: Player:FindBestTeam
---

> **Player:FindBestTeam**(player: [Player](/vext/ref/server/type/player)): [TeamId](/vext/ref/fb/teamid)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player**{{< hook-ro >}} | [Player](/vext/ref/server/type/player) |  |

## Returns

| Type | Description |
| ---- | ----------- |
| **[TeamId](/vext/ref/fb/teamid)** |  |

## Example

```lua
Hooks:Install('Player:FindBestTeam', 1, function(hook, player)
    -- Do stuff here.
end)
```
