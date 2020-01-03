---
title: CriteriaAward
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
| award | [AbstractAwardData](/vext/ref/fb/abstractawarddata/) |             |
| count | number                                 |             |
| sid   | string                                 |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [CriteriaAward](/vext/ref/fb/criteriaaward/) | [Clone](#clone) |            |

### Clone

> [CriteriaAward](/vext/ref/fb/criteriaaward/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
