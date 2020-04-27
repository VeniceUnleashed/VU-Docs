---
title: Player:Killed
---

> **Player:Killed**(player: [Player](/vext/ref/server/type/player), inflictor: [Player](/vext/ref/server/type/player) \| nil, position: [Vec3](/vext/ref/shared/type/vec3), weapon: string, isRoadKill: bool, isHeadShot: bool, wasVictimInReviveState: bool, info: [DamageGiverInfo](/vext/ref/server/type/damagegiverinfo))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **inflictor** | [Player](/vext/ref/server/type/player) \| nil |  |
| **position** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **weapon** | string |  |
| **isRoadKill** | bool |  |
| **isHeadShot** | bool |  |
| **wasVictimInReviveState** | bool |  |
| **info** | [DamageGiverInfo](/vext/ref/server/type/damagegiverinfo) |  |

## Example

```lua
Events:Subscribe('Player:Killed', function(player, inflictor, position, weapon, isRoadKill, isHeadShot, wasVictimInReviveState, info)
    -- Do stuff here.
end)
```
