---
title: Player:Connected
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/client/class/player) | player |             |

## Usage Example

``` lua
local function OnPlayerConnected(player)
    -- Add your logic here
end

Events:Subscribe('Player:Connected', OnPlayerConnected)
```
