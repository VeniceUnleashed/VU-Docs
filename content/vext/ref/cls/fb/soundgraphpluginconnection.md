---
title: SoundGraphPluginConnection (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                  | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| SoundGraphPluginConnection()                                 | Create a new instance of this structure type.            |
| SoundGraphPluginConnection(SoundGraphPluginConnection other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                                                   | Description |
| -------------- | ---------------------------------------------------------------------- | ----------- |
| connectionType | [SoundGraphPluginConnectionType](SoundGraphPluginConnectionType)       |             |
| parameters     | [SoundGraphPluginConnectionParam](SoundGraphPluginConnectionParam)\[\] |             |
| bus            | [SoundBusData](SoundBusData)                                           |             |
| voiceIndex     | number                                                                 |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [SoundGraphPluginConnection](SoundGraphPluginConnection) | [Clone](#clone) |            |

### Clone

> [SoundGraphPluginConnection](SoundGraphPluginConnection) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
