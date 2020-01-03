---
title: StreamGroupData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| StreamGroupData()                                                          | Create a new instance of this container type.                                                                         |
| StreamGroupData(StreamGroupData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| StreamGroupData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StreamGroupData](/vext/ref/fb/streamgroupdata/). |

## Properties

| Name   | Type               | Description |
| ------ | ------------------ | ----------- |
| assets | [Asset](/vext/ref/fb/asset/)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [StreamGroupData](/vext/ref/fb/streamgroupdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StreamGroupData](/vext/ref/fb/streamgroupdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
