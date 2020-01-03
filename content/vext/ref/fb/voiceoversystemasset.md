---
title: VoiceOverSystemAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverSystemAsset()                                                          | Create a new instance of this container type.                                                                                   |
| VoiceOverSystemAsset(VoiceOverSystemAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VoiceOverSystemAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset/).                                      |
| VoiceOverSystemAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset/). |

## Properties

| Name                          | Type                                                                   | Description |
| ----------------------------- | ---------------------------------------------------------------------- | ----------- |
| intervals                     | [VoiceOverInterval](/vext/ref/fb/voiceoverinterval/)\[\]                             |             |
| labels                        | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel/)\[\]                                   |             |
| types                         | [VoiceOverObject](/vext/ref/fb/voiceoverobject/)\[\]                                 |             |
| objects                       | [VoiceOverObject](/vext/ref/fb/voiceoverobject/)\[\]                                 |             |
| constants                     | [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue/)\[\]       |             |
| masterLanguage                | [AudioLanguage](/vext/ref/fb/audiolanguage/)                                         |             |
| defaultPronunciation          | [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation/)                       |             |
| pronunciations                | [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation/)\[\]                   |             |
| queueGroups                   | [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup/)\[\] |             |
| defaultPositionedQueueGroup   | [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup/)     |             |
| defaultUnpositionedQueueGroup | [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup/)     |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
