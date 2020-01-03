---
title: ColorCorrectionData
---
## Description

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| ColorCorrectionData()                          | Create a new instance of this container type.            |
| ColorCorrectionData(ColorCorrectionData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name                | Type                                             | Description |
| ------------------- | ------------------------------------------------ | ----------- |
| contrast            | [Vec3](/vext/ref/shared/class/Vec3)                |             |
| saturation          | [Vec3](/vext/ref/shared/class/Vec3)                |             |
| brightness          | [Vec3](/vext/ref/shared/class/Vec3)                |             |
| realm               | [Realm](/vext/ref/fb/realm)               |             |
| hue                 | number                                           |             |
| colorGradingTexture | [TextureAsset](/vext/ref/fb/textureasset) |             |
| colorGradingEnable  | bool                                             |             |
| enable              | bool                                             |             |

## Methods

| Type                                                            | Name            | Parameters |
| --------------------------------------------------------------- | --------------- | ---------- |
| [ColorCorrectionData](/vext/ref/cls/clt/colorcorrectiondata) | [Clone](#clone) |            |

### Clone

> [ColorCorrectionData](/vext/ref/cls/clt/colorcorrectiondata) **Clone**()

Creates a shallow-copy clone of the instance.
