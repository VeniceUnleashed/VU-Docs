---
title: VoiceOverPronunciation (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverPronunciation()                                                          | Create a new instance of this container type.                                                                                       |
| VoiceOverPronunciation(VoiceOverPronunciation other)                              | Create a reference copy of an instance of the same type.                                                                            |
| VoiceOverPronunciation([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverPronunciation](VoiceOverPronunciation). |

## Properties

| Name              | Type                                                             | Description |
| ----------------- | ---------------------------------------------------------------- | ----------- |
| name              | string                                                           |             |
| primaryLanguage   | [AudioLanguage](AudioLanguage)                                   |             |
| secondaryLanguage | [AudioLanguage](AudioLanguage)                                   |             |
| secondaryFallback | [VoiceOverPronunciationFallback](VoiceOverPronunciationFallback) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverPronunciation](VoiceOverPronunciation) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverPronunciation](VoiceOverPronunciation) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
