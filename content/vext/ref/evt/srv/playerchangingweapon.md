---
title: Player:ChangingWeapon (Server Event)
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player) | player |             |

## Usage Example

``` lua
local function OnPlayerChangingWeapon(player)
    -- Add your logic here
end

Events:Subscribe('Player:ChangingWeapon', OnPlayerChangingWeapon)
```
