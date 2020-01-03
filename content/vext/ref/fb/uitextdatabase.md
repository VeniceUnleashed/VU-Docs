---
title: UITextDatabase
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| UITextDatabase()                                                          | Create a new instance of this container type.                                                                       |
| UITextDatabase(UITextDatabase other)                                      | Create a reference copy of an instance of the same type.                                                            |
| UITextDatabase([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UITextDatabase](/vext/ref/fb/uitextdatabase/).                                      |
| UITextDatabase([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UITextDatabase](/vext/ref/fb/uitextdatabase/). |

## Properties

| Name               | Type                              | Description |
| ------------------ | --------------------------------- | ----------- |
| language           | [LanguageFormat](/vext/ref/fb/languageformat/)  |             |
| binaryChunk        | [Guid](/vext/ref/shared/class/guid) |             |
| binaryChunkSize    | number                            |             |
| histogramChunk     | [Guid](/vext/ref/shared/class/guid) |             |
| histogramChunkSize | number                            |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [UITextDatabase](/vext/ref/fb/uitextdatabase/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UITextDatabase](/vext/ref/fb/uitextdatabase/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
