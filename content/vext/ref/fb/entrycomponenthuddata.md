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
| seatType               | [EntrySeatType](EntrySeatType) |             |
| frustum                | bool                           |             |
| visible                | bool                           |             |
| maximizeMiniMapOnEntry | bool                           |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [EntryComponentHudData](EntryComponentHudData) | [Clone](#clone) |            |

### Clone

> [EntryComponentHudData](EntryComponentHudData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
