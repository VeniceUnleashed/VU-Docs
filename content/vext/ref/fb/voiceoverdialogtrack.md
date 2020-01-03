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
| VoiceOverDialogTrack([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverDialogTrack](VoiceOverDialogTrack). |

## Properties

| Name                  | Type                                                               | Description |
| --------------------- | ------------------------------------------------------------------ | ----------- |
| source                | [VoiceOverValueConnection](VoiceOverValueConnection)               |             |
| takeControl           | [VoiceOverValueConnection](VoiceOverValueConnection)               |             |
| takeIndexMapping      | [VoiceOverDialogTakeMapping](VoiceOverDialogTakeMapping)\[\]       |             |
| takeSwitching         | [VoiceOverDialogTakeBehavior](VoiceOverDialogTakeBehavior)         |             |
| clips                 | [VoiceOverDialogClip](VoiceOverDialogClip)\[\]                     |             |
| samplerNode           | [AudioGraphNodeData](AudioGraphNodeData)                           |             |
| output                | [AudioGraphNodeData](AudioGraphNodeData)                           |             |
| queueGroup            | [VoiceOverConversationQueueGroup](VoiceOverConversationQueueGroup) |             |
| parentTrackIndex      | number                                                             |             |
| takeSwitchingOnResume | bool                                                               |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverDialogTrack](VoiceOverDialogTrack) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverDialogTrack](VoiceOverDialogTrack) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
