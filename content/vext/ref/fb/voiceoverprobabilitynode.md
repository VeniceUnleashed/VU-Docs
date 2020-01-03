---
title: VoiceOverProbabilityNode
---
### Base Classes

[VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverProbabilityNode()                                                          | Create a new instance of this container type.                                                                                           |
| VoiceOverProbabilityNode(VoiceOverProbabilityNode other)                            | Create a reference copy of an instance of the same type.                                                                                |
| VoiceOverProbabilityNode([VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) other)  | Upcast an instance of type [VoiceOverExpressionNode](/vext/ref/fb/voiceoverexpressionnode/) to [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode/).  |
| VoiceOverProbabilityNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode/).                      |
| VoiceOverProbabilityNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode/). |

## Properties

| Name        | Type                             | Description |
| ----------- | -------------------------------- | ----------- |
| falseValue  | [VoiceOverValue](/vext/ref/fb/voiceovervalue/) |             |
| trueValue   | [VoiceOverValue](/vext/ref/fb/voiceovervalue/) |             |
| probability | number                           |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverProbabilityNode](/vext/ref/fb/voiceoverprobabilitynode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
