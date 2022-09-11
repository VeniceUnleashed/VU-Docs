---
title: Player:SquadChange
---

> **Player:SquadChange**(player: [Player](/vext/ref/server/type/player), squad: [SquadId](/vext/ref/fb/squadid), oldSquad: [SquadId](/vext/ref/fb/squadid))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **squad** | [SquadId](/vext/ref/fb/squadid) |  |
| **oldSquad** | [SquadId](/vext/ref/fb/squadid) |  |

## Example

```lua
Events:Subscribe('Player:SquadChange', function(player, squad, oldSquad)
    -- Do stuff here.
end)
```
