---
title: FogData
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
| curve                    | [Vec4](/vext/ref/shared/class/vec4)  |             |
| fogColorCurve            | [Vec4](/vext/ref/shared/class/vec4)  |             |
| fogColor                 | [Vec3](/vext/ref/shared/class/vec3)  |             |
| fogColorStart            | number                             |             |
| fogDistanceMultiplier    | number                             |             |
| realm                    | [Realm](/vext/ref/fb/realm) |             |
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
| [FogData](/vext/ref/client/class/fogdata) | [Clone](#clone) |            |

### Clone

> [FogData](/vext/ref/client/class/fogdata) **Clone**()

Creates a shallow-copy clone of the instance.
