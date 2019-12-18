---
title: OutdoorLightData (Client Class)
---
## Description

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| OutdoorLightData()                     | Create a new instance of this container type.            |
| OutdoorLightData(OutdoorLightData ref) | Create a reference copy of an instance of the same type. |

## Properties

| Name                   | Type                                             | Description |
| ---------------------- | ------------------------------------------------ | ----------- |
| sunColor               | [Vec3](/vext/ref/cls/shr/Vec3)                |             |
| cloudShadowSpeed       | [Vec2](/vext/ref/cls/shr/Vec2)                |             |
| skyColor               | [Vec3](/vext/ref/cls/shr/Vec3)                |             |
| groundColor            | [Vec3](/vext/ref/cls/shr/Vec3)                |             |
| sunRotationY           | number                                           |             |
| sunRotationX           | number                                           |             |
| realm                  | [Realm](/vext/ref/cls/fb/realm)               |             |
| skyLightAngleFactor    | number                                           |             |
| sunSpecularScale       | number                                           |             |
| skyEnvmapShadowScale   | number                                           |             |
| sunShadowHeightScale   | number                                           |             |
| cloudShadowCoverage    | number                                           |             |
| cloudShadowTexture     | [TextureAsset](/vext/ref/cls/fb/textureasset) |             |
| translucencyDistortion | number                                           |             |
| cloudShadowSize        | number                                           |             |
| translucencyAmbient    | number                                           |             |
| cloudShadowExponent    | number                                           |             |
| translucencyScale      | number                                           |             |
| translucencyPower      | number                                           |             |
| enable                 | bool                                             |             |
| cloudShadowEnable      | bool                                             |             |

## Methods

| Type                                                      | Name            | Parameters |
| --------------------------------------------------------- | --------------- | ---------- |
| [OutdoorLightData](/vext/ref/cls/clt/outdoorlightdata) | [Clone](#clone) |            |

### Clone

> [OutdoorLightData](/vext/ref/cls/clt/outdoorlightdata) **Clone**()

Creates a shallow-copy clone of the instance.
