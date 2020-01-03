---
title: Player:Killed
---
## Description

## Parameters

| Type                                  | Name                | Description |
| ------------------------------------- | ------------------- | ----------- |
| [Player](/vext/ref/server/class/player) | player              |             |
| [Player](/vext/ref/server/class/player) | inflictor           |             |
| [Vec3](/vext/ref/shared/class/vec3)     | position            |             |
| string                                | weapon              |             |
| bool                                  | roadKill            |             |
| bool                                  | headShot            |             |
| bool                                  | victimInReviveState |             |

## Usage Example

``` lua
local function OnPlayerKilled(player, inflictor, position, weapon, roadKill, headShot, victimInReviveState)
    -- Add your logic here
end

Events:Subscribe('Player:Killed', OnPlayerKilled)
```
