---
title: DynamicWeaponPickupSlotData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| DynamicWeaponPickupSlotData()                                  | Create a new instance of this structure type.            |
| DynamicWeaponPickupSlotData(DynamicWeaponPickupSlotData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| weaponSlot         | number |             |
| altWeaponSlot      | number |             |
| linkedToWeaponSlot | number |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata/) | [Clone](#clone) |            |

### Clone

> [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
