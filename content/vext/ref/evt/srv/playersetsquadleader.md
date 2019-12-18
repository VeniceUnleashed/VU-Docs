---
title: Player:SetSquadLeader (Server Event)
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player) | player |             |

## Usage Example

``` lua
local function OnPlayerSetSquadLeader(player)
    -- Add your logic here
end

Events:Subscribe('Player:SetSquadLeader', OnPlayerSetSquadLeader)
```
