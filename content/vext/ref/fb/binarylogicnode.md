---
title: BinaryLogicNode
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| BinaryLogicNode()                                                          | Create a new instance of this container type.                                                                         |
| BinaryLogicNode(BinaryLogicNode other)                                     | Create a reference copy of an instance of the same type.                                                              |
| BinaryLogicNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [BinaryLogicNode](BinaryLogicNode).                            |
| BinaryLogicNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BinaryLogicNode](BinaryLogicNode). |

## Properties

| Name           | Type                                 | Description |
| -------------- | ------------------------------------ | ----------- |
| inValue        | [UINodePort](UINodePort)             |             |
| trueValue      | [UINodePort](UINodePort)             |             |
| falseValue     | [UINodePort](UINodePort)             |             |
| dataSourceInfo | [UIDataSourceInfo](UIDataSourceInfo) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [BinaryLogicNode](BinaryLogicNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BinaryLogicNode](BinaryLogicNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
