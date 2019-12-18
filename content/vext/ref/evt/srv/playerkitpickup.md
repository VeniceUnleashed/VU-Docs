---
title: Player:KitPickup (Server Event)
---
## Description

## Parameters

| Type                                                | Name          | Description |
| --------------------------------------------------- | ------------- | ----------- |
| [Player](/vext/ref/cls/srv/player)               | player        |             |
| [DataContainer](/vext/ref/cls/shr/datacontainer) | customization |             |

## Usage Example

``` lua
local function OnPlayerKitPickup(player, customization)
    -- Add your logic here
end

Events:Subscribe('Player:KitPickup', OnPlayerKitPickup)
```
