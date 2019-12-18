---
title: MatchmakingGenericRule (Frostbite Structure)
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
| desiredValues   | [MatchmakingRuleString](MatchmakingRuleString)\[\] |             |
| ignoreIfDefault | bool                                               |             |
| mergeValues     | bool                                               |             |
| sortValues      | bool                                               |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [MatchmakingGenericRule](MatchmakingGenericRule) | [Clone](#clone) |            |

### Clone

> [MatchmakingGenericRule](MatchmakingGenericRule) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
