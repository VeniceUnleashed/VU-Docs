---
title: Player:TeamChange
---

> **Player:TeamChange**(player: [Player](/vext/ref/client/type/player), team: [TeamId](/vext/ref/fb/teamid), squad: [SquadId](/vext/ref/fb/squadid))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/client/type/player) |  |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |
| **squad** | [SquadId](/vext/ref/fb/squadid) |  |

## Example

```lua
Events:Subscribe('Player:TeamChange', function(player, team, squad)
    -- Do stuff here.
end)
```
