---
title: Player:Deleted
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/client/class/player) | player |             |

## Usage Example

``` lua
local function OnPlayerDeleted(player)
    -- Add your logic here
end

Events:Subscribe('Player:Deleted', OnPlayerDeleted)
```
