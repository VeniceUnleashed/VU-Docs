---
title: DofData
---
## Description

## Constructors

| Constructor            | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| DofData()              | Create a new instance of this container type.            |
| DofData(DofData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name                    | Type                                         | Description |
| ----------------------- | -------------------------------------------- | ----------- |
| realm                   | [Realm](/vext/ref/fb/realm)           |             |
| nearDistanceScale       | number                                       |             |
| focusDistance           | number                                       |             |
| blurFilter              | [BlurFilter](/vext/ref/fb/blurfilter) |             |
| blurFilterDeviation     | number                                       |             |
| farDistanceScale        | number                                       |             |
| blurAdd                 | number                                       |             |
| scale                   | number                                       |             |
| diffusionDofFocalLength | number                                       |             |
| diffusionDofAperture    | number                                       |             |
| diffusionDofEnable      | bool                                         |             |
| enable                  | bool                                         |             |

## Methods

| Type                                    | Name            | Parameters |
| --------------------------------------- | --------------- | ---------- |
| [DofData](/vext/ref/cls/clt/dofdata) | [Clone](#clone) |            |

### Clone

> [DofData](/vext/ref/cls/clt/dofdata) **Clone**()

Creates a shallow-copy clone of the instance.
