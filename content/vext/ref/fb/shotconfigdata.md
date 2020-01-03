---
title: ShotConfigData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| ShotConfigData()                     | Create a new instance of this structure type.            |
| ShotConfigData(ShotConfigData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                     | Type                                             | Description |
| ------------------------ | ------------------------------------------------ | ----------- |
| initialPosition          | [Vec3](/vext/ref/shared/class/vec3)                |             |
| initialDirection         | [Vec3](/vext/ref/shared/class/vec3)                |             |
| initialSpeed             | [Vec3](/vext/ref/shared/class/vec3)                |             |
| inheritWeaponSpeedAmount | number                                           |             |
| muzzleExplosion          | [ExplosionEntityData](/vext/ref/fb/explosionentitydata/)       |             |
| projectileData           | [ProjectileEntityData](/vext/ref/fb/projectileentitydata/)     |             |
| secondaryProjectileData  | [ProjectileEntityData](/vext/ref/fb/projectileentitydata/)     |             |
| projectile               | [ProjectileBlueprint](/vext/ref/fb/projectileblueprint/)       |             |
| secondaryProjectile      | [ProjectileBlueprint](/vext/ref/fb/projectileblueprint/)       |             |
| alternateProjectiles     | [UnlockableProjectile](/vext/ref/fb/unlockableprojectile/)\[\] |             |
| spawnDelay               | number                                           |             |
| numberOfBulletsPerShell  | number                                           |             |
| numberOfBulletsPerShot   | number                                           |             |
| numberOfBulletsPerBurst  | number                                           |             |
| relativeTargetAiming     | bool                                             |             |
| forceSpawnToCamera       | bool                                             |             |
| spawnVisualAtWeaponBone  | bool                                             |             |
| activeForceSpawnToCamera | bool                                             |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [ShotConfigData](/vext/ref/fb/shotconfigdata/) | [Clone](#clone) |            |

### Clone

> [ShotConfigData](/vext/ref/fb/shotconfigdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
