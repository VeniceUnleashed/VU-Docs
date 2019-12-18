---
title: Player:ModuleLoaded (Server Event)
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player) | player |             |

## Usage Example

``` lua
local function OnPlayerModuleLoaded(player)
    -- Add your logic here
end

Events:Subscribe('Player:ModuleLoaded', OnPlayerModuleLoaded)
```
