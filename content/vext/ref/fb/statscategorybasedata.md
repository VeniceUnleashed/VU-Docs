---
title: StatsCategoryBaseData
---
### Base Classes

[TreeNodeBase](/vext/ref/fb/treenodebase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryBaseData()                                                          | Create a new instance of this container type.                                                                                     |
| StatsCategoryBaseData(StatsCategoryBaseData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| StatsCategoryBaseData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/).                        |
| StatsCategoryBaseData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/). |

## Properties

| Name              | Type                                               | Description |
| ----------------- | -------------------------------------------------- | ----------- |
| baseSubCategories | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/)\[\] |             |
| code              | string                                             |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
