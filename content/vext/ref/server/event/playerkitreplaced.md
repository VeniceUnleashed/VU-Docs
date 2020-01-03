---
title: Player:KitReplaced
---
## Description

## Parameters

| Type                                                | Name       | Description |
| --------------------------------------------------- | ---------- | ----------- |
| [Player](/vext/ref/server/class/player)               | player     |             |
| [SoldierEntity](/vext/ref/server/class/soldierentity) | oldSoldier |             |
| [SoldierEntity](/vext/ref/server/class/soldierentity) | newSoldier |             |

## Usage Example

``` lua
local function OnPlayerKitReplaced(player, oldSoldier, newSoldier)
    -- Add your logic here
end

Events:Subscribe('Player:KitReplaced', OnPlayerKitReplaced)
```
