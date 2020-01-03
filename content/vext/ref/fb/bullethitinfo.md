---
title: BulletHitInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| BulletHitInfo()                    | Create a new instance of this structure type.            |
| BulletHitInfo(BulletHitInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type                                                 | Description |
| ----------------- | ---------------------------------------------------- | ----------- |
| direction         | [Vec3](/vext/ref/shared/class/vec3)                    |             |
| spawnPosition     | [Vec3](/vext/ref/shared/class/vec3)                    |             |
| weaponUnlockAsset | [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset/) |             |
| weaponType        | [AntHitReactionWeaponType](/vext/ref/fb/anthitreactionweapontype/) |             |
| boneType          | number                                               |             |
| shooterPlayerId   | number                                               |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [BulletHitInfo](/vext/ref/fb/bullethitinfo/) | [Clone](#clone) |            |

### Clone

> [BulletHitInfo](/vext/ref/fb/bullethitinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
