---
title: MatchmakingVirtualizedRule (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                  | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| MatchmakingVirtualizedRule()                                 | Create a new instance of this structure type.            |
| MatchmakingVirtualizedRule(MatchmakingVirtualizedRule other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type                                                           | Description |
| ------------------ | -------------------------------------------------------------- | ----------- |
| minFitThreshold    | string                                                         |             |
| virtualizationMode | [MatchmakingVirtualizationMode](MatchmakingVirtualizationMode) |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [MatchmakingVirtualizedRule](MatchmakingVirtualizedRule) | [Clone](#clone) |            |

### Clone

> [MatchmakingVirtualizedRule](MatchmakingVirtualizedRule) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
