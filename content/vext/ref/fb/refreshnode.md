---
title: RefreshNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| RefreshNode()                                                          | Create a new instance of this container type.                                                                 |
| RefreshNode(RefreshNode other)                                         | Create a reference copy of an instance of the same type.                                                      |
| RefreshNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [RefreshNode](/vext/ref/fb/refreshnode/).                            |
| RefreshNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RefreshNode](/vext/ref/fb/refreshnode/). |

## Properties

| Name       | Type                                 | Description |
| ---------- | ------------------------------------ | ----------- |
| inValue    | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| out        | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| dataSource | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [RefreshNode](/vext/ref/fb/refreshnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RefreshNode](/vext/ref/fb/refreshnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
