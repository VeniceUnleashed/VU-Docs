---
title: DamageInfo (Server Class)
---
## Description

## Constructors

| Constructor                                                                                          | Description                                              |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [DamageInfo](/vext/ref/cls/srv/damageinfo)()                                                      |                                                          |
| [DamageInfo](/vext/ref/cls/srv/damageinfo)([DamageInfo](/vext/ref/cls/srv/damageinfo) **ref**) | Create a reference copy of an instance of the same type. |

## Properties

| Name                     | Type                                                | Writable | Description |
| ------------------------ | --------------------------------------------------- | -------- | ----------- |
| position                 | [Vec3](/vext/ref/cls/shr/vec3)                   |          |             |
| direction                | [Vec3](/vext/ref/cls/shr/vec3)                   |          |             |
| origin                   | [Vec3](/vext/ref/cls/shr/vec3)                   |          |             |
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
| damagedMaterial          | [DataContainer](/vext/ref/cls/shr/datacontainer) |          |             |
| collidingMaterial        | [DataContainer](/vext/ref/cls/shr/datacontainer) |          |             |
