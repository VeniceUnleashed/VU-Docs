---
title: Player:SquadChange (Server Event)
---
## Description

## Parameters

| Type                                   | Name   | Description |
| -------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player)  | player |             |
| [SquadId](/vext/ref/cls/fb/squadid) | squad  |             |

## Usage Example

``` lua
local function OnPlayerSquadChange(player, squad)
    -- Add your logic here
end

Events:Subscribe('Player:SquadChange', OnPlayerSquadChange)
```
