---
title: SpotLightEntityData
---
### Base Classes

[LocalLightEntityData](/vext/ref/fb/locallightentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| SpotLightEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| SpotLightEntityData(SpotLightEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| SpotLightEntityData([LocalLightEntityData](/vext/ref/fb/locallightentitydata/) other)        | Upcast an instance of type [LocalLightEntityData](/vext/ref/fb/locallightentitydata/) to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata/).        |
| SpotLightEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata/).              |
| SpotLightEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata/).                            |
| SpotLightEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata/).                    |
| SpotLightEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata/).              |
| SpotLightEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata/). |

## Properties

| Name                | Type                             | Description |
| ------------------- | -------------------------------- | ----------- |
| shape               | [SpotLightShape](/vext/ref/fb/spotlightshape/) |             |
| coneInnerAngle      | number                           |             |
| coneOuterAngle      | number                           |             |
| frustumFov          | number                           |             |
| frustumAspect       | number                           |             |
| orthoWidth          | number                           |             |
| orthoHeight         | number                           |             |
| texture             | [TextureAsset](/vext/ref/fb/textureasset/)     |             |
| castShadowsMinLevel | [QualityLevel](/vext/ref/fb/qualitylevel/)     |             |
| castShadowsEnable   | bool                             |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [SpotLightEntityData](/vext/ref/fb/spotlightentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpotLightEntityData](/vext/ref/fb/spotlightentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
