---
title: VoiceOverManuscriptLanguageColumns (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                                  | Description                                              |
| ---------------------------------------------------------------------------- | -------------------------------------------------------- |
| VoiceOverManuscriptLanguageColumns()                                         | Create a new instance of this structure type.            |
| VoiceOverManuscriptLanguageColumns(VoiceOverManuscriptLanguageColumns other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                 | Type                           | Description |
| -------------------- | ------------------------------ | ----------- |
| language             | [AudioLanguage](AudioLanguage) |             |
| textColumn           | string                         |             |
| subtitleOffsetColumn | string                         |             |

## Methods

| Type                                                                     | Name            | Parameters |
| ------------------------------------------------------------------------ | --------------- | ---------- |
| [VoiceOverManuscriptLanguageColumns](VoiceOverManuscriptLanguageColumns) | [Clone](#clone) |            |

### Clone

> [VoiceOverManuscriptLanguageColumns](VoiceOverManuscriptLanguageColumns) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
