---
title: Player:Destroyed
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/server/class/player) | player |             |

## Usage Example

``` lua
local function OnPlayerDestroyed(player)
    -- Add your logic here
end

Events:Subscribe('Player:Destroyed', OnPlayerDestroyed)
```
