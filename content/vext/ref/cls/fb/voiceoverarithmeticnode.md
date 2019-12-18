---
title: VoiceOverArithmeticNode (Frostbite Container)
---
### Base Classes

[VoiceOverExpressionNode](VoiceOverExpressionNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverArithmeticNode()                                                          | Create a new instance of this container type.                                                                                         |
| VoiceOverArithmeticNode(VoiceOverArithmeticNode other)                             | Create a reference copy of an instance of the same type.                                                                              |
| VoiceOverArithmeticNode([VoiceOverExpressionNode](VoiceOverExpressionNode) other)  | Upcast an instance of type [VoiceOverExpressionNode](VoiceOverExpressionNode) to [VoiceOverArithmeticNode](VoiceOverArithmeticNode).  |
| VoiceOverArithmeticNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverArithmeticNode](VoiceOverArithmeticNode).                      |
| VoiceOverArithmeticNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverArithmeticNode](VoiceOverArithmeticNode). |

## Properties

| Name      | Type                                                                   | Description |
| --------- | ---------------------------------------------------------------------- | ----------- |
| a         | [VoiceOverValueConnection](VoiceOverValueConnection)                   |             |
| b         | [VoiceOverValueConnection](VoiceOverValueConnection)                   |             |
| result    | [VoiceOverValue](VoiceOverValue)                                       |             |
| operation | [VoiceOverArithmeticExpressionType](VoiceOverArithmeticExpressionType) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverArithmeticNode](VoiceOverArithmeticNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverArithmeticNode](VoiceOverArithmeticNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
