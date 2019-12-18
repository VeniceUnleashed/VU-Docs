---
title: ActionNode (Frostbite Container)
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ActionNode()                                                          | Create a new instance of this container type.                                                               |
| ActionNode(ActionNode other)                                          | Create a reference copy of an instance of the same type.                                                    |
| ActionNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [ActionNode](ActionNode).                            |
| ActionNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ActionNode](ActionNode). |

## Properties

| Name                 | Type                         | Description |
| -------------------- | ---------------------------- | ----------- |
| actionKey            | number                       |             |
| params               | string\[\]                   |             |
| actionAsset          | [Asset](Asset)               |             |
| inValue              | [UINodePort](UINodePort)     |             |
| out                  | [UINodePort](UINodePort)     |             |
| dataInputs           | [UINodePort](UINodePort)\[\] |             |
| appendIncomingParams | bool                         |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [ActionNode](ActionNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ActionNode](ActionNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
