---
title: VoiceOverLanguageRoot (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverLanguageRoot()                                                          | Create a new instance of this container type.                                                                                     |
| VoiceOverLanguageRoot(VoiceOverLanguageRoot other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VoiceOverLanguageRoot([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverLanguageRoot](VoiceOverLanguageRoot). |

## Properties

| Name     | Type                           | Description |
| -------- | ------------------------------ | ----------- |
| language | [AudioLanguage](AudioLanguage) |             |
| path     | string                         |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverLanguageRoot](VoiceOverLanguageRoot) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverLanguageRoot](VoiceOverLanguageRoot) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
