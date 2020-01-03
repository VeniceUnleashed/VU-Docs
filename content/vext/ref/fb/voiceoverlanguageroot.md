---
title: VoiceOverLanguageRoot
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverLanguageRoot()                                                          | Create a new instance of this container type.                                                                                     |
| VoiceOverLanguageRoot(VoiceOverLanguageRoot other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VoiceOverLanguageRoot([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverLanguageRoot](/vext/ref/fb/voiceoverlanguageroot/). |

## Properties

| Name     | Type                           | Description |
| -------- | ------------------------------ | ----------- |
| language | [AudioLanguage](/vext/ref/fb/audiolanguage/) |             |
| path     | string                         |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverLanguageRoot](/vext/ref/fb/voiceoverlanguageroot/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverLanguageRoot](/vext/ref/fb/voiceoverlanguageroot/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
