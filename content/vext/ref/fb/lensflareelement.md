---
title: LensFlareElement
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| LensFlareElement()                       | Create a new instance of this structure type.            |
| LensFlareElement(LensFlareElement other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                                             | Description |
| ------------------- | ------------------------------------------------ | ----------- |
| sizeCamDistCurve    | [Vec4](/vext/ref/shared/class/vec4)                |             |
| sizeAngleCurve      | [Vec4](/vext/ref/shared/class/vec4)                |             |
| size                | [Vec2](/vext/ref/shared/class/vec2)                |             |
| sizeOccluderCurve   | [Vec4](/vext/ref/shared/class/vec4)                |             |
| sizeScreenPosCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| alphaCamDistCurve   | [Vec4](/vext/ref/shared/class/vec4)                |             |
| alphaOccluderCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| alphaAngleCurve     | [Vec4](/vext/ref/shared/class/vec4)                |             |
| alphaScreenPosCurve | [Vec4](/vext/ref/shared/class/vec4)                |             |
| sizeCamDistMax      | number                                           |             |
| rayDistance         | number                                           |             |
| shader              | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| alphaCamDistMax     | number                                           |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [LensFlareElement](LensFlareElement) | [Clone](#clone) |            |

### Clone

> [LensFlareElement](LensFlareElement) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
