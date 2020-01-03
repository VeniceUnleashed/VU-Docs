---
title: VoiceOverTriggerNode
---
### Base Classes

[VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverTriggerNode()                                                          | Create a new instance of this container type.                                                                                   |
| VoiceOverTriggerNode(VoiceOverTriggerNode other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VoiceOverTriggerNode([VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/) other)    | Upcast an instance of type [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode/) to [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode/).    |
| VoiceOverTriggerNode([VoiceOverNode](/vext/ref/fb/voiceovernode/) other)                      | Upcast an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode/) to [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode/).                      |
| VoiceOverTriggerNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode/). |

## Properties

| Name       | Type                                                       | Description |
| ---------- | ---------------------------------------------------------- | ----------- |
| parameters | [VoiceOverTriggerParameter](/vext/ref/fb/voiceovertriggerparameter/)\[\] |             |
| delay      | number                                                     |             |
| event      | [VoiceOverEvent](/vext/ref/fb/voiceoverevent/)                           |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
