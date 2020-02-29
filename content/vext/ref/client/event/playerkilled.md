---
title: Player:Killed
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/client/class/player) | player |             |

## Usage Example

``` lua
local function OnPlayerKilled(player)
    -- Add your logic here
end

Events:Subscribe('Player:Killed', OnPlayerKilled)
```
