---
title: Player:Reload
---
## Description

Triggers whenever a player reloads his equipped weapon.

## Parameters

| Type                                  | Name       | Description                                   |
| ------------------------------------- | ---------- | --------------------------------------------- |
| [Player](/vext/ref/server/class/player) | player     | The player who is reloading.                  |
| string                                | weaponName | The name of the weapon that's being reloaded. |
| [Vec3](/vext/ref/shared/class/vec3)     | position   | The position of the player during the reload. |

## Usage example

``` lua
local function OnPlayerReload(player, weaponName, position)
    -- Add logic here
end

Events:Subscribe('Player:Reload', OnPlayerReload)
```
