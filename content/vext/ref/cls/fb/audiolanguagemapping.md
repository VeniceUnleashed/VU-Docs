---
title: AudioLanguageMapping (Frostbite Structure)
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
| source | [AudioLanguage](AudioLanguage) |             |
| target | [AudioLanguage](AudioLanguage) |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [AudioLanguageMapping](AudioLanguageMapping) | [Clone](#clone) |            |

### Clone

> [AudioLanguageMapping](AudioLanguageMapping) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
