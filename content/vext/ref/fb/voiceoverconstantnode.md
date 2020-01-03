---
title: VoiceOverConstantNode
---
### Base Classes

[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConstantNode()                                                          | Create a new instance of this container type.                                                                                     |
| VoiceOverConstantNode(VoiceOverConstantNode other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VoiceOverConstantNode([VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) other)  | Upcast an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) to [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode/).  |
| VoiceOverConstantNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode/).                      |
| VoiceOverConstantNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode/). |

## Properties

| Name   | Type                                             | Description |
| ------ | ------------------------------------------------ | ----------- |
| value  | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                 |             |
| source | [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue/) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverConstantNode](/vext/ref/fb/voiceoverconstantnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
