---
title: Player:KitPickup
---
## Description

## Parameters

| Type                                                | Name          | Description |
| --------------------------------------------------- | ------------- | ----------- |
| [Player](/vext/ref/server/class/player)               | player        |             |
| [DataContainer](/vext/ref/shared/class/datacontainer) | customization |             |

## Usage Example

``` lua
local function OnPlayerKitPickup(player, customization)
    -- Add your logic here
end

Events:Subscribe('Player:KitPickup', OnPlayerKitPickup)
```
