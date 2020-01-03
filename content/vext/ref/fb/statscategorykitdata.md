---
title: StatsCategoryKitData
---
### Base Classes

[StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryKitData()                                                          | Create a new instance of this container type.                                                                                   |
| StatsCategoryKitData(StatsCategoryKitData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| StatsCategoryKitData([StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) other)      | Upcast an instance of type [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) to [StatsCategoryKitData](/vext/ref/fb/statscategorykitdata/).      |
| StatsCategoryKitData([StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) other)      | Upcast an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) to [StatsCategoryKitData](/vext/ref/fb/statscategorykitdata/).      |
| StatsCategoryKitData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryKitData](/vext/ref/fb/statscategorykitdata/).                        |
| StatsCategoryKitData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryKitData](/vext/ref/fb/statscategorykitdata/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryKitData](/vext/ref/fb/statscategorykitdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryKitData](/vext/ref/fb/statscategorykitdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
