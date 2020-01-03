---
title: UINodeData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| UINodeData()                                                          | Create a new instance of this container type.                                                               |
| UINodeData(UINodeData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| UINodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINodeData](/vext/ref/fb/uinodedata/). |

## Properties

| Name           | Type           | Description |
| -------------- | -------------- | ----------- |
| name           | string         |             |
| parentGraph    | [Asset](/vext/ref/fb/asset/) |             |
| isRootNode     | bool           |             |
| parentIsScreen | bool           |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [UINodeData](/vext/ref/fb/uinodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UINodeData](/vext/ref/fb/uinodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
