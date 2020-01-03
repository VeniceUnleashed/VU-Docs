---
title: StatsCategoryLevelData
---
### Base Classes

[StatsCategoryGuidData](StatsCategoryGuidData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryLevelData()                                                          | Create a new instance of this container type.                                                                                       |
| StatsCategoryLevelData(StatsCategoryLevelData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| StatsCategoryLevelData([StatsCategoryGuidData](StatsCategoryGuidData) other)      | Upcast an instance of type [StatsCategoryGuidData](StatsCategoryGuidData) to [StatsCategoryLevelData](StatsCategoryLevelData).      |
| StatsCategoryLevelData([StatsCategoryBaseData](StatsCategoryBaseData) other)      | Upcast an instance of type [StatsCategoryBaseData](StatsCategoryBaseData) to [StatsCategoryLevelData](StatsCategoryLevelData).      |
| StatsCategoryLevelData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [StatsCategoryLevelData](StatsCategoryLevelData).                        |
| StatsCategoryLevelData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryLevelData](StatsCategoryLevelData). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatsCategoryLevelData](StatsCategoryLevelData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryLevelData](StatsCategoryLevelData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
