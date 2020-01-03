---
title: StatsCategoryGuidData
---
### Base Classes

[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryGuidData()                                                          | Create a new instance of this container type.                                                                                     |
| StatsCategoryGuidData(StatsCategoryGuidData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| StatsCategoryGuidData([StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) other)      | Upcast an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) to [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/).      |
| StatsCategoryGuidData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/).                        |
| StatsCategoryGuidData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/). |

## Properties

| Name                | Type                                  | Description |
| ------------------- | ------------------------------------- | ----------- |
| objectInstanceGuids | [Guid](/vext/ref/shared/class/guid)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
