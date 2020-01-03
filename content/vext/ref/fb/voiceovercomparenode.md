---
title: VoiceOverCompareNode
---
### Base Classes

[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverCompareNode()                                                          | Create a new instance of this container type.                                                                                   |
| VoiceOverCompareNode(VoiceOverCompareNode other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VoiceOverCompareNode([VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) other)  | Upcast an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) to [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode/).  |
| VoiceOverCompareNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode/).                      |
| VoiceOverCompareNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode/). |

## Properties

| Name       | Type                                                             | Description |
| ---------- | ---------------------------------------------------------------- | ----------- |
| a          | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/)             |             |
| b          | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/)             |             |
| falseValue | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                                 |             |
| trueValue  | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                                 |             |
| operation  | [VoiceOverCompareExpressionType](/vext/ref/fb/voiceovercompareexpressiontype/) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverCompareNode](/vext/ref/fb/voiceovercomparenode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
