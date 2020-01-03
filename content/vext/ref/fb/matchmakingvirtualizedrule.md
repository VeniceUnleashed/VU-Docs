---
title: MatchmakingVirtualizedRule
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
| virtualizationMode | [MatchmakingVirtualizationMode](/vext/ref/fb/matchmakingvirtualizationmode/) |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [MatchmakingVirtualizedRule](/vext/ref/fb/matchmakingvirtualizedrule/) | [Clone](#clone) |            |

### Clone

> [MatchmakingVirtualizedRule](/vext/ref/fb/matchmakingvirtualizedrule/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
