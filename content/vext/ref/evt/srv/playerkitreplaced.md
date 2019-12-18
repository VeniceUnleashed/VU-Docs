---
title: Player:KitReplaced (Server Event)
---
## Description

## Parameters

| Type                                                | Name       | Description |
| --------------------------------------------------- | ---------- | ----------- |
| [Player](/vext/ref/cls/srv/player)               | player     |             |
| [SoldierEntity](/vext/ref/cls/srv/soldierentity) | oldSoldier |             |
| [SoldierEntity](/vext/ref/cls/srv/soldierentity) | newSoldier |             |

## Usage Example

``` lua
local function OnPlayerKitReplaced(player, oldSoldier, newSoldier)
    -- Add your logic here
end

Events:Subscribe('Player:KitReplaced', OnPlayerKitReplaced)
```
