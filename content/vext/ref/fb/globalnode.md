---
title: GlobalNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| GlobalNode()                                                          | Create a new instance of this container type.                                                               |
| GlobalNode(GlobalNode other)                                          | Create a reference copy of an instance of the same type.                                                    |
| GlobalNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [GlobalNode](/vext/ref/fb/globalnode/).                            |
| GlobalNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GlobalNode](/vext/ref/fb/globalnode/). |

## Properties

| Name    | Type                         | Description |
| ------- | ---------------------------- | ----------- |
| outputs | [UINodePort](/vext/ref/fb/uinodeport/)\[\] |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [GlobalNode](/vext/ref/fb/globalnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GlobalNode](/vext/ref/fb/globalnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
