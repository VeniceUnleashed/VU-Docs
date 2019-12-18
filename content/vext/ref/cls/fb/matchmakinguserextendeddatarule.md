---
title: MatchmakingUserExtendedDataRule (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                            | Description                                              |
| ---------------------------------------------------------------------- | -------------------------------------------------------- |
| MatchmakingUserExtendedDataRule()                                      | Create a new instance of this structure type.            |
| MatchmakingUserExtendedDataRule(MatchmakingUserExtendedDataRule other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| rule            | string |             |
| minFitThresHold | string |             |

## Methods

| Type                                                               | Name            | Parameters |
| ------------------------------------------------------------------ | --------------- | ---------- |
| [MatchmakingUserExtendedDataRule](MatchmakingUserExtendedDataRule) | [Clone](#clone) |            |

### Clone

> [MatchmakingUserExtendedDataRule](MatchmakingUserExtendedDataRule) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
