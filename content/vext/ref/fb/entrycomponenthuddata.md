---
title: EntryComponentHudData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| EntryComponentHudData()                            | Create a new instance of this structure type.            |
| EntryComponentHudData(EntryComponentHudData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type                           | Description |
| ---------------------- | ------------------------------ | ----------- |
| index                  | number                         |             |
| seatType               | [EntrySeatType](/vext/ref/fb/entryseattype/) |             |
| frustum                | bool                           |             |
| visible                | bool                           |             |
| maximizeMiniMapOnEntry | bool                           |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [EntryComponentHudData](/vext/ref/fb/entrycomponenthuddata/) | [Clone](#clone) |            |

### Clone

> [EntryComponentHudData](/vext/ref/fb/entrycomponenthuddata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
