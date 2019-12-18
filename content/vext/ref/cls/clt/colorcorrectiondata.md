---
title: ColorCorrectionData (Client Class)
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
| contrast            | [Vec3](/vext/ref/cls/shr/Vec3)                |             |
| saturation          | [Vec3](/vext/ref/cls/shr/Vec3)                |             |
| brightness          | [Vec3](/vext/ref/cls/shr/Vec3)                |             |
| realm               | [Realm](/vext/ref/cls/fb/realm)               |             |
| hue                 | number                                           |             |
| colorGradingTexture | [TextureAsset](/vext/ref/cls/fb/textureasset) |             |
| colorGradingEnable  | bool                                             |             |
| enable              | bool                                             |             |

## Methods

| Type                                                            | Name            | Parameters |
| --------------------------------------------------------------- | --------------- | ---------- |
| [ColorCorrectionData](/vext/ref/cls/clt/colorcorrectiondata) | [Clone](#clone) |            |

### Clone

> [ColorCorrectionData](/vext/ref/cls/clt/colorcorrectiondata) **Clone**()

Creates a shallow-copy clone of the instance.
