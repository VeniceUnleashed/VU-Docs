---
title: VoiceOverDistanceNode
---
### Base Classes

[VoiceOverExpressionNode](VoiceOverExpressionNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverDistanceNode()                                                          | Create a new instance of this container type.                                                                                     |
| VoiceOverDistanceNode(VoiceOverDistanceNode other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VoiceOverDistanceNode([VoiceOverExpressionNode](VoiceOverExpressionNode) other)  | Upcast an instance of type [VoiceOverExpressionNode](VoiceOverExpressionNode) to [VoiceOverDistanceNode](VoiceOverDistanceNode).  |
| VoiceOverDistanceNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverDistanceNode](VoiceOverDistanceNode).                      |
| VoiceOverDistanceNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverDistanceNode](VoiceOverDistanceNode). |

## Properties

| Name       | Type                                                             | Description |
| ---------- | ---------------------------------------------------------------- | ----------- |
| a          | [VoiceOverValueConnection](VoiceOverValueConnection)             |             |
| b          | [VoiceOverValueConnection](VoiceOverValueConnection)             |             |
| threshold  | [VoiceOverValueConnection](VoiceOverValueConnection)             |             |
| distance   | [VoiceOverValue](VoiceOverValue)                                 |             |
| falseValue | [VoiceOverValue](VoiceOverValue)                                 |             |
| trueValue  | [VoiceOverValue](VoiceOverValue)                                 |             |
| operation  | [VoiceOverCompareExpressionType](VoiceOverCompareExpressionType) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverDistanceNode](VoiceOverDistanceNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverDistanceNode](VoiceOverDistanceNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
