---
title: SoundGraphInfo (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| SoundGraphInfo()                     | Create a new instance of this structure type.            |
| SoundGraphInfo(SoundGraphInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type                                                                   | Description |
| ---------------------- | ---------------------------------------------------------------------- | ----------- |
| voices                 | [SoundGraphVoiceInfo](SoundGraphVoiceInfo)\[\]                         |             |
| linkedPluginAttributes | [SoundGraphLinkedPluginAttribute](SoundGraphLinkedPluginAttribute)\[\] |             |
| connections            | [SoundGraphPluginConnection](SoundGraphPluginConnection)\[\]           |             |
| constructParams        | [SoundGraphPluginConstructParam](SoundGraphPluginConstructParam)\[\]   |             |
| pluginsParamCount      | number                                                                 |             |
| pluginCount            | number                                                                 |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [SoundGraphInfo](SoundGraphInfo) | [Clone](#clone) |            |

### Clone

> [SoundGraphInfo](SoundGraphInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
