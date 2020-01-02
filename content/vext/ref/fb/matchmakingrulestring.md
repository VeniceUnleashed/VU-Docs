---
title: MatchmakingRuleString
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| MatchmakingRuleString()                            | Create a new instance of this structure type.            |
| MatchmakingRuleString(MatchmakingRuleString other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                       | Description |
| -------------- | ------------------------------------------ | ----------- |
| value          | string                                     |             |
| platform       | [MatchmakingPlatform](MatchmakingPlatform) |             |
| licenses       | string\[\]                                 |             |
| useOnlyIfEmpty | bool                                       |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [MatchmakingRuleString](MatchmakingRuleString) | [Clone](#clone) |            |

### Clone

> [MatchmakingRuleString](MatchmakingRuleString) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
