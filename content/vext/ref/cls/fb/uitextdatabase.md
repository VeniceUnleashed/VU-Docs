---
title: UITextDatabase (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| UITextDatabase()                                                          | Create a new instance of this container type.                                                                       |
| UITextDatabase(UITextDatabase other)                                      | Create a reference copy of an instance of the same type.                                                            |
| UITextDatabase([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UITextDatabase](UITextDatabase).                                      |
| UITextDatabase([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UITextDatabase](UITextDatabase). |

## Properties

| Name               | Type                              | Description |
| ------------------ | --------------------------------- | ----------- |
| language           | [LanguageFormat](LanguageFormat)  |             |
| binaryChunk        | [Guid](/vext/ref/cls/shr/Guid) |             |
| binaryChunkSize    | number                            |             |
| histogramChunk     | [Guid](/vext/ref/cls/shr/Guid) |             |
| histogramChunkSize | number                            |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [UITextDatabase](UITextDatabase) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UITextDatabase](UITextDatabase) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
