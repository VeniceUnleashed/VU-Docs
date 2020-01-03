---
title: ReadinessLevels
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| ReadinessLevels()                      | Create a new instance of this structure type.            |
| ReadinessLevels(ReadinessLevels other) | Create a reference copy of a structure of the same type. |

## Properties

| Name   | Type                                                           | Description |
| ------ | -------------------------------------------------------------- | ----------- |
| patrol | [ReadinessLevelCharacteristics](ReadinessLevelCharacteristics) |             |
| ready  | [ReadinessLevelCharacteristics](ReadinessLevelCharacteristics) |             |
| combat | [ReadinessLevelCharacteristics](ReadinessLevelCharacteristics) |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [ReadinessLevels](ReadinessLevels) | [Clone](#clone) |            |

### Clone

> [ReadinessLevels](ReadinessLevels) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
