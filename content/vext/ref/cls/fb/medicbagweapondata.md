---
title: MedicBagWeaponData (Frostbite Container)
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| MedicBagWeaponData()                                                          | Create a new instance of this container type.                                                                               |
| MedicBagWeaponData(MedicBagWeaponData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| MedicBagWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [MedicBagWeaponData](MedicBagWeaponData).                            |
| MedicBagWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [MedicBagWeaponData](MedicBagWeaponData).                                |
| MedicBagWeaponData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MedicBagWeaponData](MedicBagWeaponData). |

## Properties

| Name                    | Type                     | Description |
| ----------------------- | ------------------------ | ----------- |
| healer                  | [HealerData](HealerData) |             |
| healthPointsRefillSpeed | number                   |             |
| healthPointsPerBag      | number                   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [MedicBagWeaponData](MedicBagWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MedicBagWeaponData](MedicBagWeaponData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
