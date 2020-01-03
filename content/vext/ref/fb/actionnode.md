---
title: ActionNode
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
| ActionNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ActionNode](ActionNode). |

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
| [ActionNode](ActionNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ActionNode](ActionNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
