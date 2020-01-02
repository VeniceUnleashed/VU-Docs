---
title: OutdoorLightComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| OutdoorLightComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| OutdoorLightComponentData(OutdoorLightComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| OutdoorLightComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [OutdoorLightComponentData](OutdoorLightComponentData).                      |
| OutdoorLightComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [OutdoorLightComponentData](OutdoorLightComponentData).                    |
| OutdoorLightComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [OutdoorLightComponentData](OutdoorLightComponentData).              |
| OutdoorLightComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OutdoorLightComponentData](OutdoorLightComponentData). |

## Properties

| Name                   | Type                              | Description |
| ---------------------- | --------------------------------- | ----------- |
| sunColor               | [Vec3](/vext/ref/shared/class/Vec3) |             |
| cloudShadowSpeed       | [Vec2](/vext/ref/shared/class/Vec2) |             |
| skyColor               | [Vec3](/vext/ref/shared/class/Vec3) |             |
| groundColor            | [Vec3](/vext/ref/shared/class/Vec3) |             |
| sunRotationY           | number                            |             |
| sunRotationX           | number                            |             |
| realm                  | [Realm](Realm)                    |             |
| skyLightAngleFactor    | number                            |             |
| sunSpecularScale       | number                            |             |
| skyEnvmapShadowScale   | number                            |             |
| sunShadowHeightScale   | number                            |             |
| cloudShadowCoverage    | number                            |             |
| cloudShadowTexture     | [TextureAsset](TextureAsset)      |             |
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
| [OutdoorLightComponentData](OutdoorLightComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OutdoorLightComponentData](OutdoorLightComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
