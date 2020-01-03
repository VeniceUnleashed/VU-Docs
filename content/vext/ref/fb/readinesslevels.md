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
| patrol | [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics/) |             |
| ready  | [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics/) |             |
| combat | [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics/) |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [ReadinessLevels](/vext/ref/fb/readinesslevels/) | [Clone](#clone) |            |

### Clone

> [ReadinessLevels](/vext/ref/fb/readinesslevels/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
