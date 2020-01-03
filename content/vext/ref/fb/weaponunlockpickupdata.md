---
title: WeaponUnlockPickupData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| WeaponUnlockPickupData()                             | Create a new instance of this structure type.            |
| WeaponUnlockPickupData(WeaponUnlockPickupData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                                       | Description |
| ------------------- | ------------------------------------------ | ----------- |
| unlockWeaponAndSlot | [UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot/) |             |
| altWeaponSlot       | number                                     |             |
| linkedToWeaponSlot  | number                                     |             |
| minAmmo             | number                                     |             |
| maxAmmo             | number                                     |             |
| defaultToFullAmmo   | bool                                       |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata/) | [Clone](#clone) |            |

### Clone

> [WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
