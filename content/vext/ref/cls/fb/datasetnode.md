---
title: DataSetNode (Frostbite Container)
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| DataSetNode()                                                          | Create a new instance of this container type.                                                                 |
| DataSetNode(DataSetNode other)                                         | Create a reference copy of an instance of the same type.                                                      |
| DataSetNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [DataSetNode](DataSetNode).                            |
| DataSetNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DataSetNode](DataSetNode). |

## Properties

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| inValue          | [UINodePort](UINodePort)             |             |
| out              | [UINodePort](UINodePort)             |             |
| param            | string                               |             |
| dataSource       | [UIDataSourceInfo](UIDataSourceInfo) |             |
| setToEmptyString | bool                                 |             |
| forceUpdate      | bool                                 |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [DataSetNode](DataSetNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DataSetNode](DataSetNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
