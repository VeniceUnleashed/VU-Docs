---
title: Player:SetSquadLeader
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/client/class/player) | player |             |

## Usage Example

``` lua
local function OnPlayerSetSquadLeader(player)
    -- Add your logic here
end

Events:Subscribe('Player:SetSquadLeader', OnPlayerSetSquadLeader)
```
