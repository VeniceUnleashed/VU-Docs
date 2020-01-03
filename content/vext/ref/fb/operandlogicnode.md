---
title: OperandLogicNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| OperandLogicNode()                                                          | Create a new instance of this container type.                                                                           |
| OperandLogicNode(OperandLogicNode other)                                    | Create a reference copy of an instance of the same type.                                                                |
| OperandLogicNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [OperandLogicNode](/vext/ref/fb/operandlogicnode/).                            |
| OperandLogicNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OperandLogicNode](/vext/ref/fb/operandlogicnode/). |

## Properties

| Name                | Type                                 | Description |
| ------------------- | ------------------------------------ | ----------- |
| leftDataSourceInfo  | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| operator            | [UILogicOperator](/vext/ref/fb/uilogicoperator/)   |             |
| rightDataSourceInfo | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| rightLiteralOperand | number                               |             |
| inValue             | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| trueValue           | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| falseValue          | [UINodePort](/vext/ref/fb/uinodeport/)             |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [OperandLogicNode](/vext/ref/fb/operandlogicnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OperandLogicNode](/vext/ref/fb/operandlogicnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
