---
title: VoiceOverIntervalNode
---
### Base Classes

[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverIntervalNode()                                                          | Create a new instance of this container type.                                                                                     |
| VoiceOverIntervalNode(VoiceOverIntervalNode other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VoiceOverIntervalNode([VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) other)  | Upcast an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) to [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode/).  |
| VoiceOverIntervalNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode/).                      |
| VoiceOverIntervalNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode/). |

## Properties

| Name       | Type                                                 | Description |
| ---------- | ---------------------------------------------------- | ----------- |
| threshold  | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/) |             |
| time       | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                     |             |
| falseValue | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                     |             |
| trueValue  | [VoiceOverValue](/vext/ref/fb/voiceovervalue/)                     |             |
| interval   | [VoiceOverInterval](/vext/ref/fb/voiceoverinterval/)               |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
