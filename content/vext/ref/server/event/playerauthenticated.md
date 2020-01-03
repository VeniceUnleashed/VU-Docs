---
title: Player:Authenticated
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/server/class/player) | player |             |

## Usage Example

``` lua
local function OnPlayerAuthenticated(player)
    -- Add your logic here
end

Events:Subscribe('Player:Authenticated', OnPlayerAuthenticated)
```
