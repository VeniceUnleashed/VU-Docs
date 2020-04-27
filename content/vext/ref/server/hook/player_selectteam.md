---
title: Player:SelectTeam
---

> **Player:SelectTeam**(player: [Player](/vext/ref/server/type/player), team: [TeamId](/vext/ref/fb/teamid))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player**{{< hook-ro >}} | [Player](/vext/ref/server/type/player) |  |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |

## Example

```lua
Hooks:Install('Player:SelectTeam', 1, function(hook, player, team)
    -- Do stuff here.
end)
```
