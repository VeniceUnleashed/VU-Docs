---
title: VoiceOverProbabilityNode (Frostbite Container)
---
### Base Classes

[VoiceOverExpressionNode](VoiceOverExpressionNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverProbabilityNode()                                                          | Create a new instance of this container type.                                                                                           |
| VoiceOverProbabilityNode(VoiceOverProbabilityNode other)                            | Create a reference copy of an instance of the same type.                                                                                |
| VoiceOverProbabilityNode([VoiceOverExpressionNode](VoiceOverExpressionNode) other)  | Upcast an instance of type [VoiceOverExpressionNode](VoiceOverExpressionNode) to [VoiceOverProbabilityNode](VoiceOverProbabilityNode).  |
| VoiceOverProbabilityNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverProbabilityNode](VoiceOverProbabilityNode).                      |
| VoiceOverProbabilityNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverProbabilityNode](VoiceOverProbabilityNode). |

## Properties

| Name        | Type                             | Description |
| ----------- | -------------------------------- | ----------- |
| falseValue  | [VoiceOverValue](VoiceOverValue) |             |
| trueValue   | [VoiceOverValue](VoiceOverValue) |             |
| probability | number                           |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverProbabilityNode](VoiceOverProbabilityNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverProbabilityNode](VoiceOverProbabilityNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
