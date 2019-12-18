---
title: SoundGraphVoiceInfo (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| SoundGraphVoiceInfo()                          | Create a new instance of this structure type.            |
| SoundGraphVoiceInfo(SoundGraphVoiceInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type                                             | Description |
| --------------- | ------------------------------------------------ | ----------- |
| plugins         | [SoundGraphPluginInfo](SoundGraphPluginInfo)\[\] |             |
| processingStage | number                                           |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [SoundGraphVoiceInfo](SoundGraphVoiceInfo) | [Clone](#clone) |            |

### Clone

> [SoundGraphVoiceInfo](SoundGraphVoiceInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
