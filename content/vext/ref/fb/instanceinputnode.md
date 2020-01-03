---
title: InstanceInputNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| InstanceInputNode()                                                          | Create a new instance of this container type.                                                                             |
| InstanceInputNode(InstanceInputNode other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| InstanceInputNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [InstanceInputNode](/vext/ref/fb/instanceinputnode/).                            |
| InstanceInputNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InstanceInputNode](/vext/ref/fb/instanceinputnode/). |

## Properties

| Name | Type                     | Description |
| ---- | ------------------------ | ----------- |
| out  | [UINodePort](/vext/ref/fb/uinodeport/) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [InstanceInputNode](/vext/ref/fb/instanceinputnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InstanceInputNode](/vext/ref/fb/instanceinputnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
