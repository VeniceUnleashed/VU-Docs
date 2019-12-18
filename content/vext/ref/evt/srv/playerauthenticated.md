---
title: Player:Authenticated (Server Event)
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player) | player |             |

## Usage Example

``` lua
local function OnPlayerAuthenticated(player)
    -- Add your logic here
end

Events:Subscribe('Player:Authenticated', OnPlayerAuthenticated)
```
