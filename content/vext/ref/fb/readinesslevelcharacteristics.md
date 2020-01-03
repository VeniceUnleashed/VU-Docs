---
title: ReadinessLevelCharacteristics
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                        | Description                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ReadinessLevelCharacteristics()                                    | Create a new instance of this structure type.            |
| ReadinessLevelCharacteristics(ReadinessLevelCharacteristics other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| minReactionTime | number |             |
| maxReactionTime | number |             |
| reductionTime   | number |             |

## Methods

| Type                                                           | Name            | Parameters |
| -------------------------------------------------------------- | --------------- | ---------- |
| [ReadinessLevelCharacteristics](ReadinessLevelCharacteristics) | [Clone](#clone) |            |

### Clone

> [ReadinessLevelCharacteristics](ReadinessLevelCharacteristics) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
