---
title: EnlightenData (Client Class)
---
## Description

## Constructors

| Constructor                                 | Description                                              |
| ------------------------------------------- | -------------------------------------------------------- |
| EnlightenData()                             | Create a new instance of this container type.            |
| EnlightenData(EnlightenComponentData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name                     | Type                               | Description |
| ------------------------ | ---------------------------------- | ----------- |
| skyBoxSkyColor           | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| skyBoxBackLightColor     | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| skyBoxGroundColor        | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| terrainColor             | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| skyBoxSunLightColor      | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| bounceScale              | number                             |             |
| cullDistance             | number                             |             |
| sunScale                 | number                             |             |
| realm                    | [Realm](/vext/ref/cls/fb/realm) |             |
| skyBoxBackLightRotationY | number                             |             |
| skyBoxSunLightColorSize  | number                             |             |
| skyBoxBackLightColorSize | number                             |             |
| skyBoxBackLightRotationX | number                             |             |
| skyBoxEnable             | bool                               |             |
| enable                   | bool                               |             |

## Methods

| Type                                                | Name            | Parameters |
| --------------------------------------------------- | --------------- | ---------- |
| [EnlightenData](/vext/ref/cls/clt/enlightendata) | [Clone](#clone) |            |

### Clone

> [EnlightenData](/vext/ref/cls/clt/enlightendata) **Clone**()

Creates a shallow-copy clone of the instance.
