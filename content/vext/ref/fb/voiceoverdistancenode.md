---
title: VoiceOverDistanceNode
---
### Base Classes

[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverDistanceNode()                                                          | Create a new instance of this container type.                                                                                     |
| VoiceOverDistanceNode(VoiceOverDistanceNode other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VoiceOverDistanceNode([VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) other)  | Upcast an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) to [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode/).  |
| VoiceOverDistanceNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode/).                      |
| VoiceOverDistanceNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode/). |

## Properties

| Name       | Type                                                             | Description |
| ---------- | ---------------------------------------------------------------- | ----------- |
| a          | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/)             |             |
| b          | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/)             |             |
| threshold  | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/)             |             |
| distance   | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                                 |             |
| falseValue | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                                 |             |
| trueValue  | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                                 |             |
| operation  | [VoiceOverCompareExpressionType](/vext/ref/fb/voiceovercompareexpressiontype/) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverDistanceNode](/vext/ref/fb/voiceoverdistancenode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
