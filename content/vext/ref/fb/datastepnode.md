---
title: DataStepNode
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| DataStepNode()                                                          | Create a new instance of this container type.                                                                   |
| DataStepNode(DataStepNode other)                                        | Create a reference copy of an instance of the same type.                                                        |
| DataStepNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [DataStepNode](DataStepNode).                            |
| DataStepNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DataStepNode](DataStepNode). |

## Properties

| Name                  | Type                                 | Description |
| --------------------- | ------------------------------------ | ----------- |
| inValue               | [UINodePort](UINodePort)             |             |
| out                   | [UINodePort](UINodePort)             |             |
| steps                 | number\[\]                           |             |
| currentStepDataSource | [UIDataSourceInfo](UIDataSourceInfo) |             |
| dataSource            | [UIDataSourceInfo](UIDataSourceInfo) |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [DataStepNode](DataStepNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DataStepNode](DataStepNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
