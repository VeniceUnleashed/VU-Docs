---
title: SkyEffectState (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SkyEffectState()                                                          | Create a new instance of this container type.                                                                       |
| SkyEffectState(SkyEffectState other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SkyEffectState([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SkyEffectState](SkyEffectState). |

## Properties

| Name                  | Type                              | Description |
| --------------------- | --------------------------------- | ----------- |
| cloudLayerSunColor    | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| panoramicTileFactor   | number                            |             |
| sunSize               | number                            |             |
| skyGradientScale      | number                            |             |
| sunScale              | number                            |             |
| panoramicUVMinX       | number                            |             |
| skyGradientTexture    | [TextureAsset](TextureAsset)      |             |
| panoramicUVMinY       | number                            |             |
| panoramicUVMaxY       | number                            |             |
| panoramicUVMaxX       | number                            |             |
| panoramicRotation     | number                            |             |
| panoramicTexture      | [TextureAsset](TextureAsset)      |             |
| panoramicAlphaTexture | [TextureAsset](TextureAsset)      |             |
| windDirection         | number                            |             |
| cloudLayerMaskTexture | [TextureAsset](TextureAsset)      |             |
| cloudLayer1           | [SkyCloudLayer](SkyCloudLayer)    |             |
| cloudLayer2           | [SkyCloudLayer](SkyCloudLayer)    |             |
| staticEnvmapTexture   | [TextureAsset](TextureAsset)      |             |
| enable                | bool                              |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SkyEffectState](SkyEffectState) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SkyEffectState](SkyEffectState) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
