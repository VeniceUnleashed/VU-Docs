---
title: Player:ReviveAccepted (Server Event)
---
## Description

## Parameters

| Type                                  | Name    | Description |
| ------------------------------------- | ------- | ----------- |
| [Player](/vext/ref/cls/srv/player) | player  |             |
| [Player](/vext/ref/cls/srv/player) | revivee |             |

## Usage Example

``` lua
local function OnPlayerReviveAccepted(player, revivee)
    -- Add your logic here
end

Events:Subscribe('Player:ReviveAccepted', OnPlayerReviveAccepted)
```
