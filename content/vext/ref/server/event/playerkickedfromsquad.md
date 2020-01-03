---
title: Player:KickedFromSquad
---
## Description

## Parameters

| Type                                   | Name   | Description |
| -------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/server/class/player)  | player |             |
| [SquadId](/vext/ref/fb/squadid) | squad  |             |

## Usage Example

``` lua
local function OnPlayerKickedFromSquad(player, squad)
    -- Add your logic here
end

Events:Subscribe('Player:KickedFromSquad', OnPlayerKickedFromSquad)
```
