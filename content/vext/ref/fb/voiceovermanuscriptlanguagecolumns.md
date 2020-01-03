---
title: VoiceOverManuscriptLanguageColumns
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
| language             | [AudioLanguage](/vext/ref/fb/audiolanguage/) |             |
| textColumn           | string                         |             |
| subtitleOffsetColumn | string                         |             |

## Methods

| Type                                                                     | Name            | Parameters |
| ------------------------------------------------------------------------ | --------------- | ---------- |
| [VoiceOverManuscriptLanguageColumns](/vext/ref/fb/voiceovermanuscriptlanguagecolumns/) | [Clone](#clone) |            |

### Clone

> [VoiceOverManuscriptLanguageColumns](/vext/ref/fb/voiceovermanuscriptlanguagecolumns/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
