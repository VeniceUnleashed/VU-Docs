---
title: AwardStarNameInstance (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| AwardStarNameInstance()                            | Create a new instance of this structure type.            |
| AwardStarNameInstance(AwardStarNameInstance other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                                           | Description |
| -------- | ---------------------------------------------- | ----------- |
| name     | string                                         |             |
| category | [StatsCategoryBaseData](StatsCategoryBaseData) |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [AwardStarNameInstance](AwardStarNameInstance) | [Clone](#clone) |            |

### Clone

> [AwardStarNameInstance](AwardStarNameInstance) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
