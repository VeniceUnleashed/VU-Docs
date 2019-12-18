---
title: CriteriaAward (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| CriteriaAward()                    | Create a new instance of this structure type.            |
| CriteriaAward(CriteriaAward other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type                                   | Description |
| ----- | -------------------------------------- | ----------- |
| award | [AbstractAwardData](AbstractAwardData) |             |
| count | number                                 |             |
| sid   | string                                 |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [CriteriaAward](CriteriaAward) | [Clone](#clone) |            |

### Clone

> [CriteriaAward](CriteriaAward) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
