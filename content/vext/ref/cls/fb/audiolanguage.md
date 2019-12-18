---
title: AudioLanguage (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AudioLanguage()                                                          | Create a new instance of this container type.                                                                     |
| AudioLanguage(AudioLanguage other)                                       | Create a reference copy of an instance of the same type.                                                          |
| AudioLanguage([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AudioLanguage](AudioLanguage). |

## Properties

| Name            | Type                             | Description |
| --------------- | -------------------------------- | ----------- |
| name            | string                           |             |
| languageMapping | [LanguageFormat](LanguageFormat) |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [AudioLanguage](AudioLanguage) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AudioLanguage](AudioLanguage) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
