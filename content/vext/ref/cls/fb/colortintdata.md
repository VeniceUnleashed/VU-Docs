---
title: ColorTintData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| ColorTintData()                    | Create a new instance of this structure type.            |
| ColorTintData(ColorTintData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type                              | Description |
| ---------- | --------------------------------- | ----------- |
| contrast   | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| brightness | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| saturation | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| hue        | number                            |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [ColorTintData](ColorTintData) | [Clone](#clone) |            |

### Clone

> [ColorTintData](ColorTintData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
