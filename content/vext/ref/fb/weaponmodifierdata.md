---
title: WeaponModifierData
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
| unlockAsset | [UnlockAssetBase](/vext/ref/fb/unlockassetbase/)           |             |
| modifiers   | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)\[\] |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [WeaponModifierData](/vext/ref/fb/weaponmodifierdata/) | [Clone](#clone) |            |

### Clone

> [WeaponModifierData](/vext/ref/fb/weaponmodifierdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
