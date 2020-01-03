---
title: SkyEffectState
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SkyEffectState()                                                          | Create a new instance of this container type.                                                                       |
| SkyEffectState(SkyEffectState other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SkyEffectState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SkyEffectState](/vext/ref/fb/skyeffectstate/). |

## Properties

| Name                  | Type                              | Description |
| --------------------- | --------------------------------- | ----------- |
| cloudLayerSunColor    | [Vec3](/vext/ref/shared/class/vec3) |             |
| panoramicTileFactor   | number                            |             |
| sunSize               | number                            |             |
| skyGradientScale      | number                            |             |
| sunScale              | number                            |             |
| panoramicUVMinX       | number                            |             |
| skyGradientTexture    | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| panoramicUVMinY       | number                            |             |
| panoramicUVMaxY       | number                            |             |
| panoramicUVMaxX       | number                            |             |
| panoramicRotation     | number                            |             |
| panoramicTexture      | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| panoramicAlphaTexture | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| windDirection         | number                            |             |
| cloudLayerMaskTexture | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| cloudLayer1           | [SkyCloudLayer](/vext/ref/fb/skycloudlayer/)    |             |
| cloudLayer2           | [SkyCloudLayer](/vext/ref/fb/skycloudlayer/)    |             |
| staticEnvmapTexture   | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| enable                | bool                              |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SkyEffectState](/vext/ref/fb/skyeffectstate/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SkyEffectState](/vext/ref/fb/skyeffectstate/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
