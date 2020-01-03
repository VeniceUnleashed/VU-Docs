---
title: SoundGraphInfo
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
| voices                 | [SoundGraphVoiceInfo](/vext/ref/fb/soundgraphvoiceinfo/)\[\]                         |             |
| linkedPluginAttributes | [SoundGraphLinkedPluginAttribute](/vext/ref/fb/soundgraphlinkedpluginattribute/)\[\] |             |
| connections            | [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection/)\[\]           |             |
| constructParams        | [SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam/)\[\]   |             |
| pluginsParamCount      | number                                                                 |             |
| pluginCount            | number                                                                 |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [SoundGraphInfo](/vext/ref/fb/soundgraphinfo/) | [Clone](#clone) |            |

### Clone

> [SoundGraphInfo](/vext/ref/fb/soundgraphinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
