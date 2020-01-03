---
title: MatchmakingSizeRule
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
| configurations | [MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration/)\[\] |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule/) | [Clone](#clone) |            |

### Clone

> [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
