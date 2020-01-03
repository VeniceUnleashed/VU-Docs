---
title: LogicalExpressionNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| LogicalExpressionNodeData()                                                          | Create a new instance of this container type.                                                                                             |
| LogicalExpressionNodeData(LogicalExpressionNodeData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| LogicalExpressionNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [LogicalExpressionNodeData](/vext/ref/fb/logicalexpressionnodedata/).            |
| LogicalExpressionNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LogicalExpressionNodeData](/vext/ref/fb/logicalexpressionnodedata/). |

## Properties

| Name     | Type                                                   | Description |
| -------- | ------------------------------------------------------ | ----------- |
| inputs   | [LogicalExpressionEntry](/vext/ref/fb/logicalexpressionentry/)\[\]   |             |
| trigger  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)               |             |
| operator | [LogicalExpressionOperator](/vext/ref/fb/logicalexpressionoperator/) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LogicalExpressionNodeData](/vext/ref/fb/logicalexpressionnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LogicalExpressionNodeData](/vext/ref/fb/logicalexpressionnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
