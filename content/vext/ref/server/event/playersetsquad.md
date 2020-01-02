---
title: Player:SetSquad (Server Event)
---
## Description

## Parameters

| Type                                   | Name   | Description |
| -------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/server/class/player)  | player |             |
| [SquadId](/vext/ref/fb/squadid) | squad  |             |

## Usage Example

``` lua
local function OnPlayerSetSquad(player, squad)
    -- Add your logic here
end

Events:Subscribe('Player:SetSquad', OnPlayerSetSquad)
```
