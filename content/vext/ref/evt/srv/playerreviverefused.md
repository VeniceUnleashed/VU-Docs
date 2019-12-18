---
title: Player:ReviveRefused (Server Event)
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player) | player |             |

## Usage Example

``` lua
local function OnPlayerReviveRefused(player)
    -- Add your logic here
end

Events:Subscribe('Player:ReviveRefused', OnPlayerReviveRefused)
```
