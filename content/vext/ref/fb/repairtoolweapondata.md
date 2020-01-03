---
title: RepairToolWeaponData
---
### Base Classes

[PowerToolWeaponData](/vext/ref/fb/powertoolweapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| RepairToolWeaponData()                                                          | Create a new instance of this container type.                                                                                   |
| RepairToolWeaponData(RepairToolWeaponData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| RepairToolWeaponData([PowerToolWeaponData](/vext/ref/fb/powertoolweapondata/) other)          | Upcast an instance of type [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata/) to [RepairToolWeaponData](/vext/ref/fb/repairtoolweapondata/).          |
| RepairToolWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [RepairToolWeaponData](/vext/ref/fb/repairtoolweapondata/).                            |
| RepairToolWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [RepairToolWeaponData](/vext/ref/fb/repairtoolweapondata/).                                |
| RepairToolWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RepairToolWeaponData](/vext/ref/fb/repairtoolweapondata/). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| rechargeSpeed | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [RepairToolWeaponData](/vext/ref/fb/repairtoolweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RepairToolWeaponData](/vext/ref/fb/repairtoolweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
