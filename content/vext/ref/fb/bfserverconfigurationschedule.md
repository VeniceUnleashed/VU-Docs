---
title: BFServerConfigurationSchedule
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                        | Description                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| BFServerConfigurationSchedule()                                    | Create a new instance of this structure type.            |
| BFServerConfigurationSchedule(BFServerConfigurationSchedule other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                                                   | Description |
| -------- | ------------------------------------------------------ | ----------- |
| licenses | string\[\]                                             |             |
| levels   | string\[\]                                             |             |
| data     | [BFServerConfigurationData](/vext/ref/fb/bfserverconfigurationdata/) |             |

## Methods

| Type                                                           | Name            | Parameters |
| -------------------------------------------------------------- | --------------- | ---------- |
| [BFServerConfigurationSchedule](/vext/ref/fb/bfserverconfigurationschedule/) | [Clone](#clone) |            |

### Clone

> [BFServerConfigurationSchedule](/vext/ref/fb/bfserverconfigurationschedule/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
