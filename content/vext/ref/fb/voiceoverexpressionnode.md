---
title: VoiceOverExpressionNode
---
### Base Classes

[VoiceOverNode](/vext/ref/fb/voiceovernode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverExpressionNode()                                                          | Create a new instance of this container type.                                                                                         |
| VoiceOverExpressionNode(VoiceOverExpressionNode other)                             | Create a reference copy of an instance of the same type.                                                                              |
| VoiceOverExpressionNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/).                      |
| VoiceOverExpressionNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
