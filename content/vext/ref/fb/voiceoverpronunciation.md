---
title: VoiceOverPronunciation
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverPronunciation()                                                          | Create a new instance of this container type.                                                                                       |
| VoiceOverPronunciation(VoiceOverPronunciation other)                              | Create a reference copy of an instance of the same type.                                                                            |
| VoiceOverPronunciation([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation/). |

## Properties

| Name              | Type                                                             | Description |
| ----------------- | ---------------------------------------------------------------- | ----------- |
| name              | string                                                           |             |
| primaryLanguage   | [AudioLanguage](/vext/ref/fb/audiolanguage/)                                   |             |
| secondaryLanguage | [AudioLanguage](/vext/ref/fb/audiolanguage/)                                   |             |
| secondaryFallback | [VoiceOverPronunciationFallback](/vext/ref/fb/voiceoverpronunciationfallback/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
