---
title: Player:KickedFromSquad (Server Event)
---
## Description

## Parameters

| Type                                   | Name   | Description |
| -------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player)  | player |             |
| [SquadId](/vext/ref/cls/fb/squadid) | squad  |             |

## Usage Example

``` lua
local function OnPlayerKickedFromSquad(player, squad)
    -- Add your logic here
end

Events:Subscribe('Player:KickedFromSquad', OnPlayerKickedFromSquad)
```
