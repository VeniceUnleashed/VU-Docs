---
title: Player:ReviveAccepted (Server Event)
---
## Description

## Parameters

| Type                                  | Name    | Description |
| ------------------------------------- | ------- | ----------- |
| [Player](/vext/ref/server/class/player) | player  |             |
| [Player](/vext/ref/server/class/player) | revivee |             |

## Usage Example

``` lua
local function OnPlayerReviveAccepted(player, revivee)
    -- Add your logic here
end

Events:Subscribe('Player:ReviveAccepted', OnPlayerReviveAccepted)
```
