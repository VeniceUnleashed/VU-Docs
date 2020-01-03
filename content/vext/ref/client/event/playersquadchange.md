---
title: Player:SquadChange
---
## Description

## Parameters

| Type                                   | Name   | Description |
| -------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/clt/player)  | player |             |
| [SquadId](/vext/ref/fb/squadid) | squad  |             |

## Usage Example

``` lua
local function OnPlayerSquadChange(player, squad)
    -- Add your logic here
end

Events:Subscribe('Player:SquadChange', OnPlayerSquadChange)
```
