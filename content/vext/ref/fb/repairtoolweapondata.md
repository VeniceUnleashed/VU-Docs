---
title: RepairToolWeaponData
---
### Base Classes

[PowerToolWeaponData](PowerToolWeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| RepairToolWeaponData()                                                          | Create a new instance of this container type.                                                                                   |
| RepairToolWeaponData(RepairToolWeaponData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| RepairToolWeaponData([PowerToolWeaponData](PowerToolWeaponData) other)          | Upcast an instance of type [PowerToolWeaponData](PowerToolWeaponData) to [RepairToolWeaponData](RepairToolWeaponData).          |
| RepairToolWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [RepairToolWeaponData](RepairToolWeaponData).                            |
| RepairToolWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [RepairToolWeaponData](RepairToolWeaponData).                                |
| RepairToolWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RepairToolWeaponData](RepairToolWeaponData). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| rechargeSpeed | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [RepairToolWeaponData](RepairToolWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RepairToolWeaponData](RepairToolWeaponData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
