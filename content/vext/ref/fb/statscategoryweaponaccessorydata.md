---
title: StatsCategoryWeaponAccessoryData
---
### Base Classes

[StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryWeaponAccessoryData()                                                          | Create a new instance of this container type.                                                                                                           |
| StatsCategoryWeaponAccessoryData(StatsCategoryWeaponAccessoryData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| StatsCategoryWeaponAccessoryData([StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) other)      | Upcast an instance of type [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) to [StatsCategoryWeaponAccessoryData](/vext/ref/fb/statscategoryweaponaccessorydata/).      |
| StatsCategoryWeaponAccessoryData([StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) other)      | Upcast an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) to [StatsCategoryWeaponAccessoryData](/vext/ref/fb/statscategoryweaponaccessorydata/).      |
| StatsCategoryWeaponAccessoryData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryWeaponAccessoryData](/vext/ref/fb/statscategoryweaponaccessorydata/).                        |
| StatsCategoryWeaponAccessoryData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryWeaponAccessoryData](/vext/ref/fb/statscategoryweaponaccessorydata/). |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryWeaponAccessoryData](/vext/ref/fb/statscategoryweaponaccessorydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryWeaponAccessoryData](/vext/ref/fb/statscategoryweaponaccessorydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
