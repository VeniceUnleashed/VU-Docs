---
title: UnlockableProjectile
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| UnlockableProjectile()                           | Create a new instance of this structure type.            |
| UnlockableProjectile(UnlockableProjectile other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                         | Description |
| -------------- | -------------------------------------------- | ----------- |
| initialSpeed   | [Vec3](/vext/ref/shared/class/vec3)            |             |
| projectileData | [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) |             |
| projectile     | [ProjectileBlueprint](/vext/ref/fb/projectileblueprint/)   |             |
| unlock         | [UnlockAssetBase](/vext/ref/fb/unlockassetbase/)           |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [UnlockableProjectile](/vext/ref/fb/unlockableprojectile/) | [Clone](#clone) |            |

### Clone

> [UnlockableProjectile](/vext/ref/fb/unlockableprojectile/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
