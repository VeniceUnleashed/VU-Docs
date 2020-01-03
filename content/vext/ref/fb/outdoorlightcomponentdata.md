---
title: OutdoorLightComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| OutdoorLightComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| OutdoorLightComponentData(OutdoorLightComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| OutdoorLightComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata/).                      |
| OutdoorLightComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata/).                    |
| OutdoorLightComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata/).              |
| OutdoorLightComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata/). |

## Properties

| Name                   | Type                              | Description |
| ---------------------- | --------------------------------- | ----------- |
| sunColor               | [Vec3](/vext/ref/shared/class/vec3) |             |
| cloudShadowSpeed       | [Vec2](/vext/ref/shared/class/vec2) |             |
| skyColor               | [Vec3](/vext/ref/shared/class/vec3) |             |
| groundColor            | [Vec3](/vext/ref/shared/class/vec3) |             |
| sunRotationY           | number                            |             |
| sunRotationX           | number                            |             |
| realm                  | [Realm](/vext/ref/fb/realm/)                    |             |
| skyLightAngleFactor    | number                            |             |
| sunSpecularScale       | number                            |             |
| skyEnvmapShadowScale   | number                            |             |
| sunShadowHeightScale   | number                            |             |
| cloudShadowCoverage    | number                            |             |
| cloudShadowTexture     | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| translucencyDistortion | number                            |             |
| cloudShadowSize        | number                            |             |
| translucencyAmbient    | number                            |             |
| cloudShadowExponent    | number                            |             |
| translucencyScale      | number                            |             |
| translucencyPower      | number                            |             |
| enable                 | bool                              |             |
| cloudShadowEnable      | bool                              |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
