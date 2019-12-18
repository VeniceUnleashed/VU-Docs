---
title: EnlightenLightProbeSet (Frostbite Structure)
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
| transform      | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |
| boundingBox    | [AxisAlignedBox](/vext/ref/cls/shr/AxisAlignedBox)   |             |
| sizeX          | number                                                  |             |
| sizeZ          | number                                                  |             |
| sizeY          | number                                                  |             |
| systemId       | number                                                  |             |
| blendDistance  | number                                                  |             |
| priority       | number                                                  |             |
| positions      | [Vec3](/vext/ref/cls/shr/Vec3)\[\]                   |             |
| validIndices   | number\[\]                                              |             |
| inputSystems   | number\[\]                                              |             |
| cache          | [PrecomputeCache](PrecomputeCache)                      |             |
| staticProbeSet | bool                                                    |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [EnlightenLightProbeSet](EnlightenLightProbeSet) | [Clone](#clone) |            |

### Clone

> [EnlightenLightProbeSet](EnlightenLightProbeSet) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
