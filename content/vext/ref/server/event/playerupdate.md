---
title: Player:Update (Server Event)
---
## Description

## Parameters

| Type                                  | Name      | Description |
| ------------------------------------- | --------- | ----------- |
| [Player](/vext/ref/server/class/player) | player    |             |
| float                                 | deltaTime |             |

## Usage Example

``` lua
local function OnPlayerUpdate(player, deltaTime)
    -- Add your logic here
end

Events:Subscribe('Player:Update', OnPlayerUpdate)
```
