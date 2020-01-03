---
title: PoissonRadialBlurData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| PoissonRadialBlurData()                            | Create a new instance of this structure type.            |
| PoissonRadialBlurData(PoissonRadialBlurData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| poissonDiscScale | [Vec2](/vext/ref/shared/class/vec2) |             |
| blendFactor      | number                            |             |
| radialScale      | number                            |             |
| radialExponent   | number                            |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [PoissonRadialBlurData](/vext/ref/fb/poissonradialblurdata/) | [Clone](#clone) |            |

### Clone

> [PoissonRadialBlurData](/vext/ref/fb/poissonradialblurdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
