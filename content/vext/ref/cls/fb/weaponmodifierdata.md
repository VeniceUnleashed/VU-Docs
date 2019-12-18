---
title: WeaponModifierData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| WeaponModifierData()                         | Create a new instance of this structure type.            |
| WeaponModifierData(WeaponModifierData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type                                         | Description |
| ----------- | -------------------------------------------- | ----------- |
| unlockAsset | [UnlockAssetBase](UnlockAssetBase)           |             |
| modifiers   | [WeaponModifierBase](WeaponModifierBase)\[\] |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [WeaponModifierData](WeaponModifierData) | [Clone](#clone) |            |

### Clone

> [WeaponModifierData](WeaponModifierData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
