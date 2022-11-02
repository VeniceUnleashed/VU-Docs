---
title: Player:TeamChange
---

> **Player:TeamChange**(player: [Player](/vext/ref/client/type/player), team: [TeamId](/vext/ref/fb/teamid), squad: [SquadId](/vext/ref/fb/squadid), oldTeam: [TeamId](/vext/ref/fb/teamid))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/client/type/player) |  |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |
| **squad** | [SquadId](/vext/ref/fb/squadid) |  |
| **oldTeam** | [TeamId](/vext/ref/fb/teamid) |  |

## Example

```lua
Events:Subscribe('Player:TeamChange', function(player, team, squad, oldTeam)
    -- Do stuff here.
end)
```
