---
title: WeaponPickupData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| WeaponPickupData()                       | Create a new instance of this structure type.            |
| WeaponPickupData(WeaponPickupData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type                                             | Description |
| ------------------ | ------------------------------------------------ | ----------- |
| weapon             | [SoldierWeaponBlueprint](SoldierWeaponBlueprint) |             |
| weaponSlot         | number                                           |             |
| altWeaponSlot      | number                                           |             |
| linkedToWeaponSlot | number                                           |             |
| minAmmo            | number                                           |             |
| maxAmmo            | number                                           |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [WeaponPickupData](WeaponPickupData) | [Clone](#clone) |            |

### Clone

> [WeaponPickupData](WeaponPickupData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
