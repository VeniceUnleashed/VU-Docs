---
title: VoiceOverConstantNode (Frostbite Container)
---
### Base Classes

[VoiceOverExpressionNode](VoiceOverExpressionNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConstantNode()                                                          | Create a new instance of this container type.                                                                                     |
| VoiceOverConstantNode(VoiceOverConstantNode other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VoiceOverConstantNode([VoiceOverExpressionNode](VoiceOverExpressionNode) other)  | Upcast an instance of type [VoiceOverExpressionNode](VoiceOverExpressionNode) to [VoiceOverConstantNode](VoiceOverConstantNode).  |
| VoiceOverConstantNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverConstantNode](VoiceOverConstantNode).                      |
| VoiceOverConstantNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverConstantNode](VoiceOverConstantNode). |

## Properties

| Name   | Type                                             | Description |
| ------ | ------------------------------------------------ | ----------- |
| value  | [VoiceOverValue](VoiceOverValue)                 |             |
| source | [VoiceOverConstantValue](VoiceOverConstantValue) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverConstantNode](VoiceOverConstantNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverConstantNode](VoiceOverConstantNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
