---
title: LocalLightEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LocalLightEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| LocalLightEntityData(LocalLightEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LocalLightEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [LocalLightEntityData](/vext/ref/fb/locallightentitydata/).              |
| LocalLightEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [LocalLightEntityData](/vext/ref/fb/locallightentitydata/).                            |
| LocalLightEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LocalLightEntityData](/vext/ref/fb/locallightentitydata/).                    |
| LocalLightEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LocalLightEntityData](/vext/ref/fb/locallightentitydata/).              |
| LocalLightEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LocalLightEntityData](/vext/ref/fb/locallightentitydata/). |

## Properties

| Name                | Type                                     | Description |
| ------------------- | ---------------------------------------- | ----------- |
| color               | [Vec3](/vext/ref/shared/class/vec3)        |             |
| particleColorScale  | [Vec3](/vext/ref/shared/class/vec3)        |             |
| enlightenColorScale | [Vec3](/vext/ref/shared/class/vec3)        |             |
| radius              | number                                   |             |
| intensity           | number                                   |             |
| attenuationOffset   | number                                   |             |
| enlightenColorMode  | [EnlightenColorMode](/vext/ref/fb/enlightencolormode/) |             |
| enlightenEnable     | bool                                     |             |
| visible             | bool                                     |             |
| specularEnable      | bool                                     |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LocalLightEntityData](/vext/ref/fb/locallightentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LocalLightEntityData](/vext/ref/fb/locallightentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
