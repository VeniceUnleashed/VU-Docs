---
title: Player:ChangingWeapon
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/server/class/player) | player |             |

## Usage Example

``` lua
local function OnPlayerChangingWeapon(player)
    -- Add your logic here
end

Events:Subscribe('Player:ChangingWeapon', OnPlayerChangingWeapon)
```
