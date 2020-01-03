---
title: Player:ReviveRefused
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/server/class/player) | player |             |

## Usage Example

``` lua
local function OnPlayerReviveRefused(player)
    -- Add your logic here
end

Events:Subscribe('Player:ReviveRefused', OnPlayerReviveRefused)
```
