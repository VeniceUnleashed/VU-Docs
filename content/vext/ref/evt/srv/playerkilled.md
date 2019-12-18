---
title: Player:Killed (Server Event)
---
## Description

## Parameters

| Type                                  | Name                | Description |
| ------------------------------------- | ------------------- | ----------- |
| [Player](/vext/ref/cls/srv/player) | player              |             |
| [Player](/vext/ref/cls/srv/player) | inflictor           |             |
| [Vec3](/vext/ref/cls/shr/vec3)     | position            |             |
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
