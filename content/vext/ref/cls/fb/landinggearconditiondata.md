---
title: LandingGearConditionData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                              | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- |
| LandingGearConditionData()                               | Create a new instance of this structure type.            |
| LandingGearConditionData(LandingGearConditionData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| height   | number |             |
| velocity | number |             |
| angle    | number |             |

## Methods

| Type                                                 | Name            | Parameters |
| ---------------------------------------------------- | --------------- | ---------- |
| [LandingGearConditionData](LandingGearConditionData) | [Clone](#clone) |            |

### Clone

> [LandingGearConditionData](LandingGearConditionData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
