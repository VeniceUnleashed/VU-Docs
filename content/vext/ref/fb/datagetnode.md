---
title: DataGetNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| DataGetNode()                                                          | Create a new instance of this container type.                                                                 |
| DataGetNode(DataGetNode other)                                         | Create a reference copy of an instance of the same type.                                                      |
| DataGetNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [DataGetNode](/vext/ref/fb/datagetnode/).                            |
| DataGetNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DataGetNode](/vext/ref/fb/datagetnode/). |

## Properties

| Name       | Type                                 | Description |
| ---------- | ------------------------------------ | ----------- |
| inValue    | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| out        | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| dataSource | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [DataGetNode](/vext/ref/fb/datagetnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DataGetNode](/vext/ref/fb/datagetnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
