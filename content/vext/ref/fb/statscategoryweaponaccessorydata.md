---
title: StatsCategoryWeaponAccessoryData
---
### Base Classes

[StatsCategoryGuidData](StatsCategoryGuidData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryWeaponAccessoryData()                                                          | Create a new instance of this container type.                                                                                                           |
| StatsCategoryWeaponAccessoryData(StatsCategoryWeaponAccessoryData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| StatsCategoryWeaponAccessoryData([StatsCategoryGuidData](StatsCategoryGuidData) other)      | Upcast an instance of type [StatsCategoryGuidData](StatsCategoryGuidData) to [StatsCategoryWeaponAccessoryData](StatsCategoryWeaponAccessoryData).      |
| StatsCategoryWeaponAccessoryData([StatsCategoryBaseData](StatsCategoryBaseData) other)      | Upcast an instance of type [StatsCategoryBaseData](StatsCategoryBaseData) to [StatsCategoryWeaponAccessoryData](StatsCategoryWeaponAccessoryData).      |
| StatsCategoryWeaponAccessoryData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [StatsCategoryWeaponAccessoryData](StatsCategoryWeaponAccessoryData).                        |
| StatsCategoryWeaponAccessoryData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryWeaponAccessoryData](StatsCategoryWeaponAccessoryData). |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryWeaponAccessoryData](StatsCategoryWeaponAccessoryData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryWeaponAccessoryData](StatsCategoryWeaponAccessoryData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
