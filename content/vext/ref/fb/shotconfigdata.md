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
| initialPosition          | [Vec3](/vext/ref/shared/class/Vec3)                |             |
| initialDirection         | [Vec3](/vext/ref/shared/class/Vec3)                |             |
| initialSpeed             | [Vec3](/vext/ref/shared/class/Vec3)                |             |
| inheritWeaponSpeedAmount | number                                           |             |
| muzzleExplosion          | [ExplosionEntityData](ExplosionEntityData)       |             |
| projectileData           | [ProjectileEntityData](ProjectileEntityData)     |             |
| secondaryProjectileData  | [ProjectileEntityData](ProjectileEntityData)     |             |
| projectile               | [ProjectileBlueprint](ProjectileBlueprint)       |             |
| secondaryProjectile      | [ProjectileBlueprint](ProjectileBlueprint)       |             |
| alternateProjectiles     | [UnlockableProjectile](UnlockableProjectile)\[\] |             |
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
| [ShotConfigData](ShotConfigData) | [Clone](#clone) |            |

### Clone

> [ShotConfigData](ShotConfigData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
