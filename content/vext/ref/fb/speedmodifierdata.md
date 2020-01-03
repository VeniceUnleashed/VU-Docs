---
title: SpeedModifierData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| SpeedModifierData()                        | Create a new instance of this structure type.            |
| SpeedModifierData(SpeedModifierData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| forwardConstant  | number |             |
| backwardConstant | number |             |
| leftConstant     | number |             |
| rightConstant    | number |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [SpeedModifierData](/vext/ref/fb/speedmodifierdata/) | [Clone](#clone) |            |

### Clone

> [SpeedModifierData](/vext/ref/fb/speedmodifierdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
