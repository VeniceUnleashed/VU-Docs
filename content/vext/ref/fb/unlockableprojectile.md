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
| initialSpeed   | [Vec3](/vext/ref/shared/class/Vec3)            |             |
| projectileData | [ProjectileEntityData](ProjectileEntityData) |             |
| projectile     | [ProjectileBlueprint](ProjectileBlueprint)   |             |
| unlock         | [UnlockAssetBase](UnlockAssetBase)           |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [UnlockableProjectile](UnlockableProjectile) | [Clone](#clone) |            |

### Clone

> [UnlockableProjectile](UnlockableProjectile) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
