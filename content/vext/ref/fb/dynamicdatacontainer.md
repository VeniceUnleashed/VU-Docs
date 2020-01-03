---
title: DynamicDataContainer
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| DynamicDataContainer()                                                          | Create a new instance of this container type.                                                                                   |
| DynamicDataContainer(DynamicDataContainer other)                                | Create a reference copy of an instance of the same type.                                                                        |
| DynamicDataContainer([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer/). |

## Properties

| Name   | Type                       | Description |
| ------ | -------------------------- | ----------- |
| fields | [DataField](/vext/ref/fb/datafield/)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
