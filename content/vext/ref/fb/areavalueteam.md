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
| team      | [TeamId](TeamId) |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [AreaValueTeam](AreaValueTeam) | [Clone](#clone) |            |

### Clone

> [AreaValueTeam](AreaValueTeam) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
