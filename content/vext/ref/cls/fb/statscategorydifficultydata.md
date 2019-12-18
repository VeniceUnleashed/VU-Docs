---
title: StatsCategoryDifficultyData (Frostbite Container)
---
### Base Classes

[StatsCategoryGuidData](StatsCategoryGuidData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryDifficultyData()                                                          | Create a new instance of this container type.                                                                                                 |
| StatsCategoryDifficultyData(StatsCategoryDifficultyData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| StatsCategoryDifficultyData([StatsCategoryGuidData](StatsCategoryGuidData) other)      | Upcast an instance of type [StatsCategoryGuidData](StatsCategoryGuidData) to [StatsCategoryDifficultyData](StatsCategoryDifficultyData).      |
| StatsCategoryDifficultyData([StatsCategoryBaseData](StatsCategoryBaseData) other)      | Upcast an instance of type [StatsCategoryBaseData](StatsCategoryBaseData) to [StatsCategoryDifficultyData](StatsCategoryDifficultyData).      |
| StatsCategoryDifficultyData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [StatsCategoryDifficultyData](StatsCategoryDifficultyData).                        |
| StatsCategoryDifficultyData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatsCategoryDifficultyData](StatsCategoryDifficultyData). |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryDifficultyData](StatsCategoryDifficultyData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatsCategoryDifficultyData](StatsCategoryDifficultyData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
