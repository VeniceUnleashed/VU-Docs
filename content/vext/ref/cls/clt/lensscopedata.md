---
title: LensScopeData (Client Class)
---
## Description

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| LensScopeData()                    | Create a new instance of this container type.            |
| LensScopeData(LensScopeData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name                             | Type                               | Description |
| -------------------------------- | ---------------------------------- | ----------- |
| chromaticAberrationColor1        | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| radialBlendDistanceCoefficients  | [Vec2](/vext/ref/cls/shr/Vec2)  |             |
| chromaticAberrationColor2        | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| blurCenter                       | [Vec2](/vext/ref/cls/shr/Vec2)  |             |
| chromaticAberrationDisplacement2 | [Vec2](/vext/ref/cls/shr/Vec2)  |             |
| chromaticAberrationDisplacement1 | [Vec2](/vext/ref/cls/shr/Vec2)  |             |
| chromaticAberrationStrengths     | [Vec2](/vext/ref/cls/shr/Vec2)  |             |
| blurScale                        | number                             |             |
| realm                            | [Realm](/vext/ref/cls/fb/realm) |             |
| enable                           | bool                               |             |

## Methods

| Type                                                | Name            | Parameters |
| --------------------------------------------------- | --------------- | ---------- |
| [LensScopeData](/vext/ref/cls/clt/lensscopedata) | [Clone](#clone) |            |

### Clone

> [LensScopeData](/vext/ref/cls/clt/lensscopedata) **Clone**()

Creates a shallow-copy clone of the instance.
