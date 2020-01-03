---
title: Player:TeamChange
---
## Description

## Parameters

| Type                                   | Name   | Description |
| -------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/server/class/player)  | player |             |
| [TeamId](/vext/ref/fb/teamid)   | team   |             |
| [SquadId](/vext/ref/fb/squadid) | squad  |             |

## Usage Example

``` lua
local function OnPlayerTeamChange(player, team, squad)
    -- Add your logic here
end

Events:Subscribe('Player:TeamChange', OnPlayerTeamChange)
```
