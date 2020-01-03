---
title: VoiceOverDialogTrack
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverDialogTrack()                                                          | Create a new instance of this container type.                                                                                   |
| VoiceOverDialogTrack(VoiceOverDialogTrack other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VoiceOverDialogTrack([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverDialogTrack](/vext/ref/fb/voiceoverdialogtrack/). |

## Properties

| Name                  | Type                                                               | Description |
| --------------------- | ------------------------------------------------------------------ | ----------- |
| source                | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/)               |             |
| takeControl           | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection/)               |             |
| takeIndexMapping      | [VoiceOverDialogTakeMapping](/vext/ref/fb/voiceoverdialogtakemapping/)\[\]       |             |
| takeSwitching         | [VoiceOverDialogTakeBehavior](/vext/ref/fb/voiceoverdialogtakebehavior/)         |             |
| clips                 | [VoiceOverDialogClip](/vext/ref/fb/voiceoverdialogclip/)\[\]                     |             |
| samplerNode           | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)                           |             |
| output                | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)                           |             |
| queueGroup            | [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup/) |             |
| parentTrackIndex      | number                                                             |             |
| takeSwitchingOnResume | bool                                                               |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverDialogTrack](/vext/ref/fb/voiceoverdialogtrack/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverDialogTrack](/vext/ref/fb/voiceoverdialogtrack/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
