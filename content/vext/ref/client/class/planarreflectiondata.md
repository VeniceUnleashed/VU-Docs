---
title: PlanarReflectionData (Client Container)
---
## Description

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| PlanarReflectionData()                           | Create a new instance of this container type.            |
| PlanarReflectionData(PlanarReflectionData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name                 | Type                                         | Description |
| -------------------- | -------------------------------------------- | ----------- |
| verticalBlurFilter   | [BlurFilter](/vext/ref/fb/blurfilter) |             |
| horizontalDeviation  | number                                       |             |
| groundHeight         | number                                       |             |
| verticalDeviation    | number                                       |             |
| horizontalBlurFilter | [BlurFilter](/vext/ref/fb/blurfilter) |             |
| skyRenderEnable      | bool                                         |             |
| enable               | bool                                         |             |

## Methods

| Type                                                              | Name            | Parameters |
| ----------------------------------------------------------------- | --------------- | ---------- |
| [PlanarReflectionData](/vext/ref/cls/clt/planarreflectiondata) | [Clone](#clone) |            |

### Clone

> [PlanarReflectionData](/vext/ref/cls/clt/planarreflectiondata) **Clone**()

Creates a shallow-copy clone of the instance.
