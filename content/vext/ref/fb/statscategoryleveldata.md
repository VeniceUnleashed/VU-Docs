---
title: StatsCategoryLevelData
---
### Base Classes

[StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryLevelData()                                                          | Create a new instance of this container type.                                                                                       |
| StatsCategoryLevelData(StatsCategoryLevelData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| StatsCategoryLevelData([StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) other)      | Upcast an instance of type [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) to [StatsCategoryLevelData](/vext/ref/fb/statscategoryleveldata/).      |
| StatsCategoryLevelData([StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) other)      | Upcast an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) to [StatsCategoryLevelData](/vext/ref/fb/statscategoryleveldata/).      |
| StatsCategoryLevelData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryLevelData](/vext/ref/fb/statscategoryleveldata/).                        |
| StatsCategoryLevelData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryLevelData](/vext/ref/fb/statscategoryleveldata/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatsCategoryLevelData](/vext/ref/fb/statscategoryleveldata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryLevelData](/vext/ref/fb/statscategoryleveldata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
