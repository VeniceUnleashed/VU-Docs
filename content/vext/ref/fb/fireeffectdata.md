---
title: FireEffectData
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
| rotation           | [Vec3](/vext/ref/shared/class/vec3)  |             |
| offset             | [Vec3](/vext/ref/shared/class/vec3)  |             |
| zoomRotation       | [Vec3](/vext/ref/shared/class/vec3)  |             |
| zoomOffset         | [Vec3](/vext/ref/shared/class/vec3)  |             |
| effect             | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| useZoomOffset      | bool                               |             |
| useZoomRotation    | bool                               |             |
| disableDuringZoom  | bool                               |             |
| updateTransform    | bool                               |             |
| stopLoopingEffects | bool                               |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [FireEffectData](/vext/ref/fb/fireeffectdata/) | [Clone](#clone) |            |

### Clone

> [FireEffectData](/vext/ref/fb/fireeffectdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
