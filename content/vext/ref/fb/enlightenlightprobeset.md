---
title: EnlightenLightProbeSet
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| EnlightenLightProbeSet()                             | Create a new instance of this structure type.            |
| EnlightenLightProbeSet(EnlightenLightProbeSet other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                                    | Description |
| -------------- | ------------------------------------------------------- | ----------- |
| transform      | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| boundingBox    | [AxisAlignedBox](/vext/ref/shared/class/axisalignedbox)   |             |
| sizeX          | number                                                  |             |
| sizeZ          | number                                                  |             |
| sizeY          | number                                                  |             |
| systemId       | number                                                  |             |
| blendDistance  | number                                                  |             |
| priority       | number                                                  |             |
| positions      | [Vec3](/vext/ref/shared/class/vec3)\[\]                   |             |
| validIndices   | number\[\]                                              |             |
| inputSystems   | number\[\]                                              |             |
| cache          | [PrecomputeCache](/vext/ref/fb/precomputecache/)                      |             |
| staticProbeSet | bool                                                    |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset/) | [Clone](#clone) |            |

### Clone

> [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
