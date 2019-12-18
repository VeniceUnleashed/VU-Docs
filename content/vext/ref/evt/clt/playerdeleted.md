---
title: Player:Deleted (Client Event)
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/clt/player) | player |             |

## Usage Example

``` lua
local function OnPlayerDeleted(player)
    -- Add your logic here
end

Events:Subscribe('Player:Deleted', OnPlayerDeleted)
```
