---
title: VignetteData
---
## Description

## Constructors

| Constructor                      | Description                                              |
| -------------------------------- | -------------------------------------------------------- |
| VignetteData()                   | Create a new instance of this container type.            |
| VignetteData(VignetteData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name     | Type                               | Description |
| -------- | ---------------------------------- | ----------- |
| scale    | [Vec2](/vext/ref/shared/class/vec2)  |             |
| color    | [Vec3](/vext/ref/shared/class/vec3)  |             |
| realm    | [Realm](/vext/ref/fb/realm) |             |
| exponent | number                             |             |
| opacity  | number                             |             |
| enable   | bool                               |             |

## Methods

| Type                                              | Name            | Parameters |
| ------------------------------------------------- | --------------- | ---------- |
| [VignetteData](/vext/ref/client/class/vignettedata) | [Clone](#clone) |            |

### Clone

> [VignetteData](/vext/ref/client/class/vignettedata) **Clone**()

Creates a shallow-copy clone of the instance.
