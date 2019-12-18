---
title: FogData (Client Class)
---
## Description

## Constructors

| Constructor            | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| FogData()              | Create a new instance of this container type.            |
| FogData(FogData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name                     | Type                               | Description |
| ------------------------ | ---------------------------------- | ----------- |
| curve                    | [Vec4](/vext/ref/cls/shr/Vec4)  |             |
| fogColorCurve            | [Vec4](/vext/ref/cls/shr/Vec4)  |             |
| fogColor                 | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| fogColorStart            | number                             |             |
| fogDistanceMultiplier    | number                             |             |
| realm                    | [Realm](/vext/ref/cls/fb/realm) |             |
| endValue                 | number                             |             |
| transparencyFadeStart    | number                             |             |
| start                    | number                             |             |
| transparencyFadeEnd      | number                             |             |
| fogColorEnd              | number                             |             |
| transparencyFadeClamp    | number                             |             |
| heightFogVisibilityRange | number                             |             |
| heightFogAltitude        | number                             |             |
| heightFogDepth           | number                             |             |
| heightFogFollowCamera    | number                             |             |
| fogGradientEnable        | bool                               |             |
| enable                   | bool                               |             |
| heightFogEnable          | bool                               |             |
| fogColorEnable           | bool                               |             |

## Methods

| Type                                    | Name            | Parameters |
| --------------------------------------- | --------------- | ---------- |
| [FogData](/vext/ref/cls/clt/fogdata) | [Clone](#clone) |            |

### Clone

> [FogData](/vext/ref/cls/clt/fogdata) **Clone**()

Creates a shallow-copy clone of the instance.
