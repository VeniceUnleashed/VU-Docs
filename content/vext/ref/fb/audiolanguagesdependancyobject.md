---
title: AudioLanguagesDependancyObject
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| AudioLanguagesDependancyObject()                                                          | Create a new instance of this container type.                                                                                                       |
| AudioLanguagesDependancyObject(AudioLanguagesDependancyObject other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| AudioLanguagesDependancyObject([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioLanguagesDependancyObject](AudioLanguagesDependancyObject). |

## Properties

| Name           | Type                               | Description |
| -------------- | ---------------------------------- | ----------- |
| audioLanguages | [AudioLanguage](AudioLanguage)\[\] |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AudioLanguagesDependancyObject](AudioLanguagesDependancyObject) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AudioLanguagesDependancyObject](AudioLanguagesDependancyObject) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
