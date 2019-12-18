---
title: JumpNode (Frostbite Container)
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                         | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| JumpNode()                                                          | Create a new instance of this container type.                                                           |
| JumpNode(JumpNode other)                                            | Create a reference copy of an instance of the same type.                                                |
| JumpNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [JumpNode](JumpNode).                            |
| JumpNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [JumpNode](JumpNode). |

## Properties

| Name       | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| inValue    | [UINodePort](UINodePort) |             |
| targetNode | [UINodeData](UINodeData) |             |
| targetPort | [UINodePort](UINodePort) |             |

## Methods

| Type                 | Name            | Parameters                                     |
| -------------------- | --------------- | ---------------------------------------------- |
| [JumpNode](JumpNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [JumpNode](JumpNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
