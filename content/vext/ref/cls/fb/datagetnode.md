---
title: DataGetNode (Frostbite Container)
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| DataGetNode()                                                          | Create a new instance of this container type.                                                                 |
| DataGetNode(DataGetNode other)                                         | Create a reference copy of an instance of the same type.                                                      |
| DataGetNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [DataGetNode](DataGetNode).                            |
| DataGetNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DataGetNode](DataGetNode). |

## Properties

| Name       | Type                                 | Description |
| ---------- | ------------------------------------ | ----------- |
| inValue    | [UINodePort](UINodePort)             |             |
| out        | [UINodePort](UINodePort)             |             |
| dataSource | [UIDataSourceInfo](UIDataSourceInfo) |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [DataGetNode](DataGetNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DataGetNode](DataGetNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
