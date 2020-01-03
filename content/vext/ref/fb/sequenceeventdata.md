---
title: SequenceEventData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| SequenceEventData()                        | Create a new instance of this structure type.            |
| SequenceEventData(SequenceEventData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type                   | Description |
| ----- | ---------------------- | ----------- |
| event | [EventSpec](/vext/ref/fb/eventspec/) |             |
| time  | number                 |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [SequenceEventData](/vext/ref/fb/sequenceeventdata/) | [Clone](#clone) |            |

### Clone

> [SequenceEventData](/vext/ref/fb/sequenceeventdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
