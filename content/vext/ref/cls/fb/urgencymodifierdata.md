---
title: UrgencyModifierData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| UrgencyModifierData()                          | Create a new instance of this structure type.            |
| UrgencyModifierData(UrgencyModifierData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| name     | string |             |
| modifier | number |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [UrgencyModifierData](UrgencyModifierData) | [Clone](#clone) |            |

### Clone

> [UrgencyModifierData](UrgencyModifierData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
