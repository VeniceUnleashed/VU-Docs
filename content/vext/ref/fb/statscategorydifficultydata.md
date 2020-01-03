---
title: StatsCategoryDifficultyData
---
### Base Classes

[StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryDifficultyData()                                                          | Create a new instance of this container type.                                                                                                 |
| StatsCategoryDifficultyData(StatsCategoryDifficultyData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| StatsCategoryDifficultyData([StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) other)      | Upcast an instance of type [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) to [StatsCategoryDifficultyData](/vext/ref/fb/statscategorydifficultydata/).      |
| StatsCategoryDifficultyData([StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) other)      | Upcast an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) to [StatsCategoryDifficultyData](/vext/ref/fb/statscategorydifficultydata/).      |
| StatsCategoryDifficultyData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryDifficultyData](/vext/ref/fb/statscategorydifficultydata/).                        |
| StatsCategoryDifficultyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryDifficultyData](/vext/ref/fb/statscategorydifficultydata/). |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryDifficultyData](/vext/ref/fb/statscategorydifficultydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryDifficultyData](/vext/ref/fb/statscategorydifficultydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
