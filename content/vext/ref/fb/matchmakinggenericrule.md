---
title: MatchmakingGenericRule
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| MatchmakingGenericRule()                             | Create a new instance of this structure type.            |
| MatchmakingGenericRule(MatchmakingGenericRule other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type                                               | Description |
| --------------- | -------------------------------------------------- | ----------- |
| rule            | string                                             |             |
| minFitThresHold | string                                             |             |
| setting         | string                                             |             |
| desiredValues   | [MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring/)\[\] |             |
| ignoreIfDefault | bool                                               |             |
| mergeValues     | bool                                               |             |
| sortValues      | bool                                               |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [MatchmakingGenericRule](/vext/ref/fb/matchmakinggenericrule/) | [Clone](#clone) |            |

### Clone

> [MatchmakingGenericRule](/vext/ref/fb/matchmakinggenericrule/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
