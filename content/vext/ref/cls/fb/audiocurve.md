---
title: AudioCurve (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| AudioCurve()                 | Create a new instance of this structure type.            |
| AudioCurve(AudioCurve other) | Create a reference copy of a structure of the same type. |

## Properties

| Name      | Type                                   | Description |
| --------- | -------------------------------------- | ----------- |
| points    | [AudioCurvePoint](AudioCurvePoint)\[\] |             |
| curveType | [AudioCurveType](AudioCurveType)       |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [AudioCurve](AudioCurve) | [Clone](#clone) |            |

### Clone

> [AudioCurve](AudioCurve) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
