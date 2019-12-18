---
title: FireEffectData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| FireEffectData()                     | Create a new instance of this structure type.            |
| FireEffectData(FireEffectData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type                               | Description |
| ------------------ | ---------------------------------- | ----------- |
| rotation           | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| offset             | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| zoomRotation       | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| zoomOffset         | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| effect             | [EffectBlueprint](EffectBlueprint) |             |
| useZoomOffset      | bool                               |             |
| useZoomRotation    | bool                               |             |
| disableDuringZoom  | bool                               |             |
| updateTransform    | bool                               |             |
| stopLoopingEffects | bool                               |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [FireEffectData](FireEffectData) | [Clone](#clone) |            |

### Clone

> [FireEffectData](FireEffectData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
