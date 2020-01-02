---
title: SkyComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SkyComponentData()                                                          | Create a new instance of this container type.                                                                           |
| SkyComponentData(SkyComponentData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SkyComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SkyComponentData](SkyComponentData).                      |
| SkyComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SkyComponentData](SkyComponentData).                    |
| SkyComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SkyComponentData](SkyComponentData).              |
| SkyComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SkyComponentData](SkyComponentData). |

## Properties

| Name                             | Type                              | Description |
| -------------------------------- | --------------------------------- | ----------- |
| cloudLayerSunColor               | [Vec3](/vext/ref/shared/class/Vec3) |             |
| cloudLayer2Color                 | [Vec3](/vext/ref/shared/class/Vec3) |             |
| cloudLayer1Color                 | [Vec3](/vext/ref/shared/class/Vec3) |             |
| skyGradientTexture               | [TextureAsset](TextureAsset)      |             |
| sunSize                          | number                            |             |
| brightnessScale                  | number                            |             |
| sunScale                         | number                            |             |
| panoramicUVMaxX                  | number                            |             |
| panoramicUVMinY                  | number                            |             |
| panoramicUVMaxY                  | number                            |             |
| realm                            | [Realm](Realm)                    |             |
| panoramicUVMinX                  | number                            |             |
| panoramicTexture                 | [TextureAsset](TextureAsset)      |             |
| panoramicAlphaTexture            | [TextureAsset](TextureAsset)      |             |
| panoramicTileFactor              | number                            |             |
| cloudLayerMaskTexture            | [TextureAsset](TextureAsset)      |             |
| cloudLayer1Altitude              | number                            |             |
| cloudLayer1TileFactor            | number                            |             |
| cloudLayer1Rotation              | number                            |             |
| cloudLayer1Speed                 | number                            |             |
| cloudLayer1SunLightIntensity     | number                            |             |
| panoramicRotation                | number                            |             |
| cloudLayer1AmbientLightIntensity | number                            |             |
| cloudLayer1SunLightPower         | number                            |             |
| cloudLayer1AlphaMul              | number                            |             |
| cloudLayer1Texture               | [TextureAsset](TextureAsset)      |             |
| cloudLayer2Altitude              | number                            |             |
| cloudLayer2TileFactor            | number                            |             |
| cloudLayer2Rotation              | number                            |             |
| cloudLayer2Speed                 | number                            |             |
| cloudLayer2SunLightIntensity     | number                            |             |
| cloudLayer2SunLightPower         | number                            |             |
| cloudLayer2AmbientLightIntensity | number                            |             |
| staticEnvmapScale                | number                            |             |
| cloudLayer2AlphaMul              | number                            |             |
| cloudLayer2Texture               | [TextureAsset](TextureAsset)      |             |
| staticEnvmapTexture              | [TextureAsset](TextureAsset)      |             |
| skyVisibilityExponent            | number                            |             |
| skyEnvmap8BitTexScale            | number                            |             |
| customEnvmapTexture              | [TextureAsset](TextureAsset)      |             |
| customEnvmapScale                | number                            |             |
| customEnvmapAmbient              | number                            |             |
| enable                           | bool                              |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SkyComponentData](SkyComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SkyComponentData](SkyComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
