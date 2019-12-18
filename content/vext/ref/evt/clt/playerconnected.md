---
title: Player:Connected (Client Event)
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/clt/player) | player |             |

## Usage Example

``` lua
local function OnPlayerConnected(player)
    -- Add your logic here
end

Events:Subscribe('Player:Connected', OnPlayerConnected)
```
