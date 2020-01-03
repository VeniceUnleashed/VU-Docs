---
title: SkyComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SkyComponentData()                                                          | Create a new instance of this container type.                                                                           |
| SkyComponentData(SkyComponentData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SkyComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SkyComponentData](/vext/ref/fb/skycomponentdata/).                      |
| SkyComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SkyComponentData](/vext/ref/fb/skycomponentdata/).                    |
| SkyComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SkyComponentData](/vext/ref/fb/skycomponentdata/).              |
| SkyComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SkyComponentData](/vext/ref/fb/skycomponentdata/). |

## Properties

| Name                             | Type                              | Description |
| -------------------------------- | --------------------------------- | ----------- |
| cloudLayerSunColor               | [Vec3](/vext/ref/shared/class/vec3) |             |
| cloudLayer2Color                 | [Vec3](/vext/ref/shared/class/vec3) |             |
| cloudLayer1Color                 | [Vec3](/vext/ref/shared/class/vec3) |             |
| skyGradientTexture               | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| sunSize                          | number                            |             |
| brightnessScale                  | number                            |             |
| sunScale                         | number                            |             |
| panoramicUVMaxX                  | number                            |             |
| panoramicUVMinY                  | number                            |             |
| panoramicUVMaxY                  | number                            |             |
| realm                            | [Realm](/vext/ref/fb/realm/)                    |             |
| panoramicUVMinX                  | number                            |             |
| panoramicTexture                 | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| panoramicAlphaTexture            | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| panoramicTileFactor              | number                            |             |
| cloudLayerMaskTexture            | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| cloudLayer1Altitude              | number                            |             |
| cloudLayer1TileFactor            | number                            |             |
| cloudLayer1Rotation              | number                            |             |
| cloudLayer1Speed                 | number                            |             |
| cloudLayer1SunLightIntensity     | number                            |             |
| panoramicRotation                | number                            |             |
| cloudLayer1AmbientLightIntensity | number                            |             |
| cloudLayer1SunLightPower         | number                            |             |
| cloudLayer1AlphaMul              | number                            |             |
| cloudLayer1Texture               | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| cloudLayer2Altitude              | number                            |             |
| cloudLayer2TileFactor            | number                            |             |
| cloudLayer2Rotation              | number                            |             |
| cloudLayer2Speed                 | number                            |             |
| cloudLayer2SunLightIntensity     | number                            |             |
| cloudLayer2SunLightPower         | number                            |             |
| cloudLayer2AmbientLightIntensity | number                            |             |
| staticEnvmapScale                | number                            |             |
| cloudLayer2AlphaMul              | number                            |             |
| cloudLayer2Texture               | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| staticEnvmapTexture              | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| skyVisibilityExponent            | number                            |             |
| skyEnvmap8BitTexScale            | number                            |             |
| customEnvmapTexture              | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| customEnvmapScale                | number                            |             |
| customEnvmapAmbient              | number                            |             |
| enable                           | bool                              |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SkyComponentData](/vext/ref/fb/skycomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SkyComponentData](/vext/ref/fb/skycomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
