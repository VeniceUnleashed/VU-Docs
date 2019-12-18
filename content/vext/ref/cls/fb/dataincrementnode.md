---
title: DataIncrementNode (Frostbite Container)
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| DataIncrementNode()                                                          | Create a new instance of this container type.                                                                             |
| DataIncrementNode(DataIncrementNode other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| DataIncrementNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [DataIncrementNode](DataIncrementNode).                            |
| DataIncrementNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DataIncrementNode](DataIncrementNode). |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| inValue       | [UINodePort](UINodePort)             |             |
| out           | [UINodePort](UINodePort)             |             |
| max           | number                               |             |
| min           | number                               |             |
| incrementSize | number                               |             |
| dataSource    | [UIDataSourceInfo](UIDataSourceInfo) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [DataIncrementNode](DataIncrementNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DataIncrementNode](DataIncrementNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
