---
title: MatchmakingSizeRule (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| MatchmakingSizeRule()                          | Create a new instance of this structure type.            |
| MatchmakingSizeRule(MatchmakingSizeRule other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                                             | Description |
| -------------- | ---------------------------------------------------------------- | ----------- |
| setting        | string                                                           |             |
| configurations | [MatchmakingSizeConfiguration](MatchmakingSizeConfiguration)\[\] |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [MatchmakingSizeRule](MatchmakingSizeRule) | [Clone](#clone) |            |

### Clone

> [MatchmakingSizeRule](MatchmakingSizeRule) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
