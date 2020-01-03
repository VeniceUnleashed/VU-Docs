---
title: StatsCategoryWeaponData
---
### Base Classes

[StatsCategoryGuidData](StatsCategoryGuidData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryWeaponData()                                                          | Create a new instance of this container type.                                                                                         |
| StatsCategoryWeaponData(StatsCategoryWeaponData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| StatsCategoryWeaponData([StatsCategoryGuidData](StatsCategoryGuidData) other)      | Upcast an instance of type [StatsCategoryGuidData](StatsCategoryGuidData) to [StatsCategoryWeaponData](StatsCategoryWeaponData).      |
| StatsCategoryWeaponData([StatsCategoryBaseData](StatsCategoryBaseData) other)      | Upcast an instance of type [StatsCategoryBaseData](StatsCategoryBaseData) to [StatsCategoryWeaponData](StatsCategoryWeaponData).      |
| StatsCategoryWeaponData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [StatsCategoryWeaponData](StatsCategoryWeaponData).                        |
| StatsCategoryWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryWeaponData](StatsCategoryWeaponData). |

## Properties

| Name                 | Type                                   | Description |
| -------------------- | -------------------------------------- | ----------- |
| soldierWeaponId      | number                                 |             |
| accessoryUnlockGates | [CriteriaGateList](CriteriaGateList)   |             |
| unlocksInfo          | [BasicUnlockInfo](BasicUnlockInfo)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryWeaponData](StatsCategoryWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryWeaponData](StatsCategoryWeaponData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
