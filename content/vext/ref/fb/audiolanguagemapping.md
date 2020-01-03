---
title: AudioLanguageMapping
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| AudioLanguageMapping()                           | Create a new instance of this structure type.            |
| AudioLanguageMapping(AudioLanguageMapping other) | Create a reference copy of a structure of the same type. |

## Properties

| Name   | Type                           | Description |
| ------ | ------------------------------ | ----------- |
| source | [AudioLanguage](/vext/ref/fb/audiolanguage/) |             |
| target | [AudioLanguage](/vext/ref/fb/audiolanguage/) |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping/) | [Clone](#clone) |            |

### Clone

> [AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
