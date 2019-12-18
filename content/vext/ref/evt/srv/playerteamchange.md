---
title: Player:TeamChange (Server Event)
---
## Description

## Parameters

| Type                                   | Name   | Description |
| -------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player)  | player |             |
| [TeamId](/vext/ref/cls/fb/teamid)   | team   |             |
| [SquadId](/vext/ref/cls/fb/squadid) | squad  |             |

## Usage Example

``` lua
local function OnPlayerTeamChange(player, team, squad)
    -- Add your logic here
end

Events:Subscribe('Player:TeamChange', OnPlayerTeamChange)
```
