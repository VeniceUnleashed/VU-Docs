---
title: EdgeModelLightMapInstance
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                | Description                                              |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| EdgeModelLightMapInstance()                                | Create a new instance of this structure type.            |
| EdgeModelLightMapInstance(EdgeModelLightMapInstance other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type                              | Description |
| ---------- | --------------------------------- | ----------- |
| lightMapUv | [Vec4](/vext/ref/shared/class/vec4) |             |
| position   | [Vec3](/vext/ref/shared/class/vec3) |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [EdgeModelLightMapInstance](EdgeModelLightMapInstance) | [Clone](#clone) |            |

### Clone

> [EdgeModelLightMapInstance](EdgeModelLightMapInstance) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
