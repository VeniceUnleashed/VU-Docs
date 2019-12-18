---
title: BulletHitInfo (Frostbite Structure)
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
| direction         | [Vec3](/vext/ref/cls/shr/Vec3)                    |             |
| spawnPosition     | [Vec3](/vext/ref/cls/shr/Vec3)                    |             |
| weaponUnlockAsset | [SoldierWeaponUnlockAsset](SoldierWeaponUnlockAsset) |             |
| weaponType        | [AntHitReactionWeaponType](AntHitReactionWeaponType) |             |
| boneType          | number                                               |             |
| shooterPlayerId   | number                                               |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [BulletHitInfo](BulletHitInfo) | [Clone](#clone) |            |

### Clone

> [BulletHitInfo](BulletHitInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
