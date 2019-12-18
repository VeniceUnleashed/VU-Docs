---
title: MatchmakingGameAttribute (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                              | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- |
| MatchmakingGameAttribute()                               | Create a new instance of this structure type.            |
| MatchmakingGameAttribute(MatchmakingGameAttribute other) | Create a reference copy of a structure of the same type. |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| attribute | string |             |
| value     | string |             |
| override  | bool   |             |

## Methods

| Type                                                 | Name            | Parameters |
| ---------------------------------------------------- | --------------- | ---------- |
| [MatchmakingGameAttribute](MatchmakingGameAttribute) | [Clone](#clone) |            |

### Clone

> [MatchmakingGameAttribute](MatchmakingGameAttribute) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
