---
title: Player:Left (Server Event)
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player) | player |             |

## Usage Example

``` lua
local function OnPlayerLeft(player)
    -- Add your logic here
end

Events:Subscribe('Player:Left', OnPlayerLeft)
```
