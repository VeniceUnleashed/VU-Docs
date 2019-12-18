---
title: CameraSineCurveData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| CameraSineCurveData()                          | Create a new instance of this structure type.            |
| CameraSineCurveData(CameraSineCurveData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| frequency  | number |             |
| amplitude  | number |             |
| phaseShift | number |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [CameraSineCurveData](CameraSineCurveData) | [Clone](#clone) |            |

### Clone

> [CameraSineCurveData](CameraSineCurveData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
