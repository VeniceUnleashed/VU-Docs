---
title: QueryGetNode
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| QueryGetNode()                                                          | Create a new instance of this container type.                                                                   |
| QueryGetNode(QueryGetNode other)                                        | Create a reference copy of an instance of the same type.                                                        |
| QueryGetNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [QueryGetNode](QueryGetNode).                            |
| QueryGetNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [QueryGetNode](QueryGetNode). |

## Properties

| Name       | Type                                 | Description |
| ---------- | ------------------------------------ | ----------- |
| inValue    | [UINodePort](UINodePort)             |             |
| out        | [UINodePort](UINodePort)             |             |
| dataSource | [UIDataSourceInfo](UIDataSourceInfo) |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [QueryGetNode](QueryGetNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [QueryGetNode](QueryGetNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
