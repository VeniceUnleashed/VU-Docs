---
title: TonemapData
---
## Description

## Constructors

| Constructor                    | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| TonemapData()                  | Create a new instance of this container type.            |
| TonemapData(TonemapData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name                   | Type                                               | Description |
| ---------------------- | -------------------------------------------------- | ----------- |
| bloomScale             | [Vec3](/vext/ref/shared/class/vec3)                  |             |
| realm                  | [Realm](/vext/ref/fb/realm)                 |             |
| tonemapMethod          | [TonemapMethod](/vext/ref/fb/tonemapmethod) |             |
| minExposure            | number                                             |             |
| middleGray             | number                                             |             |
| exposureAdjustTime     | number                                             |             |
| maxExposure            | number                                             |             |
| chromostereopsisOffset | number                                             |             |
| chromostereopsisScale  | number                                             |             |
| chromostereopsisEnable | bool                                               |             |

## Methods

| Type                                            | Name            | Parameters |
| ----------------------------------------------- | --------------- | ---------- |
| [TonemapData](/vext/ref/cls/clt/tonemapdata) | [Clone](#clone) |            |

### Clone

> [TonemapData](/vext/ref/cls/clt/tonemapdata) **Clone**()

Creates a shallow-copy clone of the instance.
