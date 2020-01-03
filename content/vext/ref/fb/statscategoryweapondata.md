---
title: StatsCategoryWeaponData
---
### Base Classes

[StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryWeaponData()                                                          | Create a new instance of this container type.                                                                                         |
| StatsCategoryWeaponData(StatsCategoryWeaponData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| StatsCategoryWeaponData([StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) other)      | Upcast an instance of type [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) to [StatsCategoryWeaponData](/vext/ref/fb/statscategoryweapondata/).      |
| StatsCategoryWeaponData([StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) other)      | Upcast an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) to [StatsCategoryWeaponData](/vext/ref/fb/statscategoryweapondata/).      |
| StatsCategoryWeaponData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryWeaponData](/vext/ref/fb/statscategoryweapondata/).                        |
| StatsCategoryWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryWeaponData](/vext/ref/fb/statscategoryweapondata/). |

## Properties

| Name                 | Type                                   | Description |
| -------------------- | -------------------------------------- | ----------- |
| soldierWeaponId      | number                                 |             |
| accessoryUnlockGates | [CriteriaGateList](/vext/ref/fb/criteriagatelist/)   |             |
| unlocksInfo          | [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo/)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryWeaponData](/vext/ref/fb/statscategoryweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryWeaponData](/vext/ref/fb/statscategoryweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
