---
title: LogicalExpressionNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| LogicalExpressionNodeData()                                                          | Create a new instance of this container type.                                                                                             |
| LogicalExpressionNodeData(LogicalExpressionNodeData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| LogicalExpressionNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [LogicalExpressionNodeData](LogicalExpressionNodeData).            |
| LogicalExpressionNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LogicalExpressionNodeData](LogicalExpressionNodeData). |

## Properties

| Name     | Type                                                   | Description |
| -------- | ------------------------------------------------------ | ----------- |
| inputs   | [LogicalExpressionEntry](LogicalExpressionEntry)\[\]   |             |
| trigger  | [AudioGraphNodePort](AudioGraphNodePort)               |             |
| operator | [LogicalExpressionOperator](LogicalExpressionOperator) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LogicalExpressionNodeData](LogicalExpressionNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LogicalExpressionNodeData](LogicalExpressionNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
