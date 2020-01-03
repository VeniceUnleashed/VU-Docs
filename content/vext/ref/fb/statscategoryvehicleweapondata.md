---
title: StatsCategoryVehicleWeaponData
---
### Base Classes

[StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryVehicleWeaponData()                                                          | Create a new instance of this container type.                                                                                                       |
| StatsCategoryVehicleWeaponData(StatsCategoryVehicleWeaponData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| StatsCategoryVehicleWeaponData([StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) other)      | Upcast an instance of type [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) to [StatsCategoryVehicleWeaponData](/vext/ref/fb/statscategoryvehicleweapondata/).      |
| StatsCategoryVehicleWeaponData([StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) other)      | Upcast an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) to [StatsCategoryVehicleWeaponData](/vext/ref/fb/statscategoryvehicleweapondata/).      |
| StatsCategoryVehicleWeaponData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryVehicleWeaponData](/vext/ref/fb/statscategoryvehicleweapondata/).                        |
| StatsCategoryVehicleWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryVehicleWeaponData](/vext/ref/fb/statscategoryvehicleweapondata/). |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryVehicleWeaponData](/vext/ref/fb/statscategoryvehicleweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryVehicleWeaponData](/vext/ref/fb/statscategoryvehicleweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
