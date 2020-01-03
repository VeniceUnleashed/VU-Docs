---
title: MedicBagWeaponData
---
### Base Classes

[WeaponData](/vext/ref/fb/weapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| MedicBagWeaponData()                                                          | Create a new instance of this container type.                                                                               |
| MedicBagWeaponData(MedicBagWeaponData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| MedicBagWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata/).                            |
| MedicBagWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata/).                                |
| MedicBagWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata/). |

## Properties

| Name                    | Type                     | Description |
| ----------------------- | ------------------------ | ----------- |
| healer                  | [HealerData](/vext/ref/fb/healerdata/) |             |
| healthPointsRefillSpeed | number                   |             |
| healthPointsPerBag      | number                   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
