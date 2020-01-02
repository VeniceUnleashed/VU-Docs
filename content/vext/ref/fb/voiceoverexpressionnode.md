---
title: VoiceOverExpressionNode
---
### Base Classes

[VoiceOverNode](VoiceOverNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverExpressionNode()                                                          | Create a new instance of this container type.                                                                                         |
| VoiceOverExpressionNode(VoiceOverExpressionNode other)                             | Create a reference copy of an instance of the same type.                                                                              |
| VoiceOverExpressionNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverExpressionNode](VoiceOverExpressionNode).                      |
| VoiceOverExpressionNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverExpressionNode](VoiceOverExpressionNode). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverExpressionNode](VoiceOverExpressionNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverExpressionNode](VoiceOverExpressionNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
