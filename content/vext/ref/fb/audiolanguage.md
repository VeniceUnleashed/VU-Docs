---
title: AudioLanguage
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AudioLanguage()                                                          | Create a new instance of this container type.                                                                     |
| AudioLanguage(AudioLanguage other)                                       | Create a reference copy of an instance of the same type.                                                          |
| AudioLanguage([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioLanguage](/vext/ref/fb/audiolanguage/). |

## Properties

| Name            | Type                             | Description |
| --------------- | -------------------------------- | ----------- |
| name            | string                           |             |
| languageMapping | [LanguageFormat](/vext/ref/fb/languageformat/) |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [AudioLanguage](/vext/ref/fb/audiolanguage/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AudioLanguage](/vext/ref/fb/audiolanguage/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
