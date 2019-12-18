---
title: ComparisonLogicNode (Frostbite Container)
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ComparisonLogicNode()                                                          | Create a new instance of this container type.                                                                                 |
| ComparisonLogicNode(ComparisonLogicNode other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ComparisonLogicNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [ComparisonLogicNode](ComparisonLogicNode).                            |
| ComparisonLogicNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ComparisonLogicNode](ComparisonLogicNode). |

## Properties

| Name            | Type                                 | Description |
| --------------- | ------------------------------------ | ----------- |
| inValue         | [UINodePort](UINodePort)             |             |
| outputs         | [UINodePort](UINodePort)\[\]         |             |
| dataSourceInfo  | [UIDataSourceInfo](UIDataSourceInfo) |             |
| skipFractionals | bool                                 |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ComparisonLogicNode](ComparisonLogicNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ComparisonLogicNode](ComparisonLogicNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
