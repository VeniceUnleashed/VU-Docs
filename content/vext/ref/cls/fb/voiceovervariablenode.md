---
title: VoiceOverVariableNode (Frostbite Container)
---
### Base Classes

[VoiceOverExpressionNode](VoiceOverExpressionNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverVariableNode()                                                          | Create a new instance of this container type.                                                                                     |
| VoiceOverVariableNode(VoiceOverVariableNode other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VoiceOverVariableNode([VoiceOverExpressionNode](VoiceOverExpressionNode) other)  | Upcast an instance of type [VoiceOverExpressionNode](VoiceOverExpressionNode) to [VoiceOverVariableNode](VoiceOverVariableNode).  |
| VoiceOverVariableNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverVariableNode](VoiceOverVariableNode).                      |
| VoiceOverVariableNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverVariableNode](VoiceOverVariableNode). |

## Properties

| Name   | Type                                       | Description |
| ------ | ------------------------------------------ | ----------- |
| value  | [VoiceOverValue](VoiceOverValue)           |             |
| source | [VoiceOverNamedValue](VoiceOverNamedValue) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverVariableNode](VoiceOverVariableNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverVariableNode](VoiceOverVariableNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
