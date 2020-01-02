---
title: VoiceOverSystemAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverSystemAsset()                                                          | Create a new instance of this container type.                                                                                   |
| VoiceOverSystemAsset(VoiceOverSystemAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VoiceOverSystemAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VoiceOverSystemAsset](VoiceOverSystemAsset).                                      |
| VoiceOverSystemAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverSystemAsset](VoiceOverSystemAsset). |

## Properties

| Name                          | Type                                                                   | Description |
| ----------------------------- | ---------------------------------------------------------------------- | ----------- |
| intervals                     | [VoiceOverInterval](VoiceOverInterval)\[\]                             |             |
| labels                        | [VoiceOverLabel](VoiceOverLabel)\[\]                                   |             |
| types                         | [VoiceOverObject](VoiceOverObject)\[\]                                 |             |
| objects                       | [VoiceOverObject](VoiceOverObject)\[\]                                 |             |
| constants                     | [VoiceOverGlobalConstantValue](VoiceOverGlobalConstantValue)\[\]       |             |
| masterLanguage                | [AudioLanguage](AudioLanguage)                                         |             |
| defaultPronunciation          | [VoiceOverPronunciation](VoiceOverPronunciation)                       |             |
| pronunciations                | [VoiceOverPronunciation](VoiceOverPronunciation)\[\]                   |             |
| queueGroups                   | [VoiceOverConversationQueueGroup](VoiceOverConversationQueueGroup)\[\] |             |
| defaultPositionedQueueGroup   | [VoiceOverConversationQueueGroup](VoiceOverConversationQueueGroup)     |             |
| defaultUnpositionedQueueGroup | [VoiceOverConversationQueueGroup](VoiceOverConversationQueueGroup)     |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverSystemAsset](VoiceOverSystemAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverSystemAsset](VoiceOverSystemAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
