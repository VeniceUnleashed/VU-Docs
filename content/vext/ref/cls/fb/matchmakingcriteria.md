---
title: MatchmakingCriteria (Frostbite Structure)
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
| sizeRule        | [MatchmakingSizeRule](MatchmakingSizeRule)                             |             |
| pingSiteRule    | [MatchmakingPingSiteRule](MatchmakingPingSiteRule)                     |             |
| rankedRule      | [MatchmakingRankedRule](MatchmakingRankedRule)                         |             |
| genericRules    | [MatchmakingGenericRule](MatchmakingGenericRule)\[\]                   |             |
| virtualizedRule | [MatchmakingVirtualizedRule](MatchmakingVirtualizedRule)               |             |
| uedRules        | [MatchmakingUserExtendedDataRule](MatchmakingUserExtendedDataRule)\[\] |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [MatchmakingCriteria](MatchmakingCriteria) | [Clone](#clone) |            |

### Clone

> [MatchmakingCriteria](MatchmakingCriteria) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
