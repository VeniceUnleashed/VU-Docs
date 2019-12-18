---
title: InstanceOutputNode (Frostbite Container)
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| InstanceOutputNode()                                                          | Create a new instance of this container type.                                                                               |
| InstanceOutputNode(InstanceOutputNode other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| InstanceOutputNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [InstanceOutputNode](InstanceOutputNode).                            |
| InstanceOutputNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [InstanceOutputNode](InstanceOutputNode). |

## Properties

| Name         | Type                     | Description |
| ------------ | ------------------------ | ----------- |
| inValue      | [UINodePort](UINodePort) |             |
| id           | number                   |             |
| destroyGraph | bool                     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [InstanceOutputNode](InstanceOutputNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [InstanceOutputNode](InstanceOutputNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
