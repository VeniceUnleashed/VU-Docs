---
title: MatchmakingCriteria
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| MatchmakingCriteria()                          | Create a new instance of this structure type.            |
| MatchmakingCriteria(MatchmakingCriteria other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type                                                                   | Description |
| --------------- | ---------------------------------------------------------------------- | ----------- |
| sizeRule        | [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule/)                             |             |
| pingSiteRule    | [MatchmakingPingSiteRule](/vext/ref/fb/matchmakingpingsiterule/)                     |             |
| rankedRule      | [MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule/)                         |             |
| genericRules    | [MatchmakingGenericRule](/vext/ref/fb/matchmakinggenericrule/)\[\]                   |             |
| virtualizedRule | [MatchmakingVirtualizedRule](/vext/ref/fb/matchmakingvirtualizedrule/)               |             |
| uedRules        | [MatchmakingUserExtendedDataRule](/vext/ref/fb/matchmakinguserextendeddatarule/)\[\] |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria/) | [Clone](#clone) |            |

### Clone

> [MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
