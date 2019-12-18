---
title: MatchmakingSizeConfiguration (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| MatchmakingSizeConfiguration()                                   | Create a new instance of this structure type.            |
| MatchmakingSizeConfiguration(MatchmakingSizeConfiguration other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type                                       | Description |
| ------------------ | ------------------------------------------ | ----------- |
| platform           | [MatchmakingPlatform](MatchmakingPlatform) |             |
| settings           | string\[\]                                 |             |
| desiredPlayerCount | number                                     |             |
| minPlayerCount     | number                                     |             |
| maxPlayerCapacity  | number                                     |             |
| minFitThreshold    | string                                     |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [MatchmakingSizeConfiguration](MatchmakingSizeConfiguration) | [Clone](#clone) |            |

### Clone

> [MatchmakingSizeConfiguration](MatchmakingSizeConfiguration) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
