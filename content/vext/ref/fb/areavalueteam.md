---
title: AreaValueTeam
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| AreaValueTeam()                    | Create a new instance of this structure type.            |
| AreaValueTeam(AreaValueTeam other) | Create a reference copy of a structure of the same type. |

## Properties

| Name      | Type             | Description |
| --------- | ---------------- | ----------- |
| areaValue | number           |             |
| team      | [TeamId](/vext/ref/fb/teamid/) |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [AreaValueTeam](/vext/ref/fb/areavalueteam/) | [Clone](#clone) |            |

### Clone

> [AreaValueTeam](/vext/ref/fb/areavalueteam/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
