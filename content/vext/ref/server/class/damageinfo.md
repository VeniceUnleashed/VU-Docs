---
title: DamageInfo
---
## Description

## Constructors

| Constructor                                                                                          | Description                                              |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [DamageInfo](/vext/ref/server/class/damageinfo)()                                                      |                                                          |
| [DamageInfo](/vext/ref/server/class/damageinfo)([DamageInfo](/vext/ref/server/class/damageinfo) **ref**) | Create a reference copy of an instance of the same type. |

## Properties

| Name                     | Type                                                | Writable | Description |
| ------------------------ | --------------------------------------------------- | -------- | ----------- |
| position                 | [Vec3](/vext/ref/shared/class/vec3)                   |          |             |
| direction                | [Vec3](/vext/ref/shared/class/vec3)                   |          |             |
| origin                   | [Vec3](/vext/ref/shared/class/vec3)                   |          |             |
| damage                   | float                                               |          |             |
| distributeDamageOverTime | float                                               |          |             |
| empTime                  | float                                               |          |             |
| stamina                  | float                                               |          |             |
| collisionSpeed           | float                                               |          |             |
| boneIndex                | int                                                 |          |             |
| isDemolitionDamage       | bool                                                |          |             |
| includeChildren          | bool                                                |          |             |
| isExplosionDamage        | bool                                                |          |             |
| shouldForceDamage        | bool                                                |          |             |
| isBulletDamage           | bool                                                |          |             |
| isClientDamage           | bool                                                |          |             |
| damagedMaterial          | [DataContainer](/vext/ref/shared/class/datacontainer) |          |             |
| collidingMaterial        | [DataContainer](/vext/ref/shared/class/datacontainer) |          |             |
