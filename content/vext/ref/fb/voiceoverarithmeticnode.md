---
title: VoiceOverArithmeticNode
---
### Base Classes

[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverArithmeticNode()                                                          | Create a new instance of this container type.                                                                                         |
| VoiceOverArithmeticNode(VoiceOverArithmeticNode other)                             | Create a reference copy of an instance of the same type.                                                                              |
| VoiceOverArithmeticNode([VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) other)  | Upcast an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) to [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode/).  |
| VoiceOverArithmeticNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode/).                      |
| VoiceOverArithmeticNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode/). |

## Properties

| Name      | Type                                                                   | Description |
| --------- | ---------------------------------------------------------------------- | ----------- |
| a         | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/)                   |             |
| b         | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/)                   |             |
| result    | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                                       |             |
| operation | [VoiceOverArithmeticExpressionType](/vext/ref/fb/voiceoverarithmeticexpressiontype/) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverArithmeticNode](/vext/ref/fb/voiceoverarithmeticnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
