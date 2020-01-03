---
title: SoundGraphPluginConnection
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
| connectionType | [SoundGraphPluginConnectionType](/vext/ref/fb/soundgraphpluginconnectiontype/)       |             |
| parameters     | [SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam/)\[\] |             |
| bus            | [SoundBusData](/vext/ref/fb/soundbusdata/)                                           |             |
| voiceIndex     | number                                                                 |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection/) | [Clone](#clone) |            |

### Clone

> [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
