---
title: Player:ManDownRevived (Server Event)
---
## Description

## Parameters

| Type                                  | Name               | Description |
| ------------------------------------- | ------------------ | ----------- |
| [Player](/vext/ref/cls/srv/player) | reviver            |             |
| [Player](/vext/ref/cls/srv/player) | player             |             |
| bool                                  | isAdrenalineRevive |             |

## Usage Example

``` lua
local function OnPlayerManDownRevived(reviver, player, isAdrenalineRevive)
    -- Add your logic here
end

Events:Subscribe('Player:ManDownRevived', OnPlayerManDownRevived)
```
