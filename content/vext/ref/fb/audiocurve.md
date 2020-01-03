---
title: AudioCurve
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
| points    | [AudioCurvePoint](/vext/ref/fb/audiocurvepoint/)\[\] |             |
| curveType | [AudioCurveType](/vext/ref/fb/audiocurvetype/)       |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [AudioCurve](/vext/ref/fb/audiocurve/) | [Clone](#clone) |            |

### Clone

> [AudioCurve](/vext/ref/fb/audiocurve/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
