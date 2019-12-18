---
title: Player:SetSquadLeader (Client Event)
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/clt/player) | player |             |

## Usage Example

``` lua
local function OnPlayerSetSquadLeader(player)
    -- Add your logic here
end

Events:Subscribe('Player:SetSquadLeader', OnPlayerSetSquadLeader)
```
