---
title: VoiceOverCompareNode
---
### Base Classes

[VoiceOverExpressionNode](VoiceOverExpressionNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverCompareNode()                                                          | Create a new instance of this container type.                                                                                   |
| VoiceOverCompareNode(VoiceOverCompareNode other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VoiceOverCompareNode([VoiceOverExpressionNode](VoiceOverExpressionNode) other)  | Upcast an instance of type [VoiceOverExpressionNode](VoiceOverExpressionNode) to [VoiceOverCompareNode](VoiceOverCompareNode).  |
| VoiceOverCompareNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverCompareNode](VoiceOverCompareNode).                      |
| VoiceOverCompareNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverCompareNode](VoiceOverCompareNode). |

## Properties

| Name       | Type                                                             | Description |
| ---------- | ---------------------------------------------------------------- | ----------- |
| a          | [VoiceOverValueConnection](VoiceOverValueConnection)             |             |
| b          | [VoiceOverValueConnection](VoiceOverValueConnection)             |             |
| falseValue | [VoiceOverValue](VoiceOverValue)                                 |             |
| trueValue  | [VoiceOverValue](VoiceOverValue)                                 |             |
| operation  | [VoiceOverCompareExpressionType](VoiceOverCompareExpressionType) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverCompareNode](VoiceOverCompareNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverCompareNode](VoiceOverCompareNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
