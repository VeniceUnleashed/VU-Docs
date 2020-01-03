---
title: SkyCloudLayer
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| SkyCloudLayer()                    | Create a new instance of this structure type.            |
| SkyCloudLayer(SkyCloudLayer other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                  | Type                              | Description |
| --------------------- | --------------------------------- | ----------- |
| color                 | [Vec3](/vext/ref/shared/class/vec3) |             |
| tileFactor            | number                            |             |
| rotation              | number                            |             |
| altitude              | number                            |             |
| speed                 | number                            |             |
| sunLightPower         | number                            |             |
| ambientLightIntensity | number                            |             |
| sunLightIntensity     | number                            |             |
| alphaMul              | number                            |             |
| texture               | [TextureAsset](TextureAsset)      |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [SkyCloudLayer](SkyCloudLayer) | [Clone](#clone) |            |

### Clone

> [SkyCloudLayer](SkyCloudLayer) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
