---
title: Player:ManDownRevived
---
## Description

## Parameters

| Type                                  | Name               | Description |
| ------------------------------------- | ------------------ | ----------- |
| [Player](/vext/ref/server/class/player) | reviver            |             |
| [Player](/vext/ref/server/class/player) | player             |             |
| bool                                  | isAdrenalineRevive |             |

## Usage Example

``` lua
local function OnPlayerManDownRevived(reviver, player, isAdrenalineRevive)
    -- Add your logic here
end

Events:Subscribe('Player:ManDownRevived', OnPlayerManDownRevived)
```
