---
title: Player:SetSquad (Server Event)
---
## Description

## Parameters

| Type                                   | Name   | Description |
| -------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player)  | player |             |
| [SquadId](/vext/ref/cls/fb/squadid) | squad  |             |

## Usage Example

``` lua
local function OnPlayerSetSquad(player, squad)
    -- Add your logic here
end

Events:Subscribe('Player:SetSquad', OnPlayerSetSquad)
```
