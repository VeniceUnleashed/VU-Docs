---
title: RefreshNode (Frostbite Container)
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| RefreshNode()                                                          | Create a new instance of this container type.                                                                 |
| RefreshNode(RefreshNode other)                                         | Create a reference copy of an instance of the same type.                                                      |
| RefreshNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [RefreshNode](RefreshNode).                            |
| RefreshNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RefreshNode](RefreshNode). |

## Properties

| Name       | Type                                 | Description |
| ---------- | ------------------------------------ | ----------- |
| inValue    | [UINodePort](UINodePort)             |             |
| out        | [UINodePort](UINodePort)             |             |
| dataSource | [UIDataSourceInfo](UIDataSourceInfo) |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [RefreshNode](RefreshNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RefreshNode](RefreshNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
