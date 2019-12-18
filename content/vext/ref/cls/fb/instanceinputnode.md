---
title: InstanceInputNode (Frostbite Container)
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| InstanceInputNode()                                                          | Create a new instance of this container type.                                                                             |
| InstanceInputNode(InstanceInputNode other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| InstanceInputNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [InstanceInputNode](InstanceInputNode).                            |
| InstanceInputNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [InstanceInputNode](InstanceInputNode). |

## Properties

| Name | Type                     | Description |
| ---- | ------------------------ | ----------- |
| out  | [UINodePort](UINodePort) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [InstanceInputNode](InstanceInputNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [InstanceInputNode](InstanceInputNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
