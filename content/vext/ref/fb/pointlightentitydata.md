---
title: PointLightEntityData
---
### Base Classes

[LocalLightEntityData](/vext/ref/fb/locallightentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| PointLightEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| PointLightEntityData(PointLightEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| PointLightEntityData([LocalLightEntityData](/vext/ref/fb/locallightentitydata/) other)        | Upcast an instance of type [LocalLightEntityData](/vext/ref/fb/locallightentitydata/) to [PointLightEntityData](/vext/ref/fb/pointlightentitydata/).        |
| PointLightEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [PointLightEntityData](/vext/ref/fb/pointlightentitydata/).              |
| PointLightEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PointLightEntityData](/vext/ref/fb/pointlightentitydata/).                            |
| PointLightEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PointLightEntityData](/vext/ref/fb/pointlightentitydata/).                    |
| PointLightEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PointLightEntityData](/vext/ref/fb/pointlightentitydata/).              |
| PointLightEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PointLightEntityData](/vext/ref/fb/pointlightentitydata/). |

## Properties

| Name                   | Type   | Description |
| ---------------------- | ------ | ----------- |
| width                  | number |             |
| translucencyAmbient    | number |             |
| translucencyScale      | number |             |
| translucencyPower      | number |             |
| translucencyDistortion | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [PointLightEntityData](/vext/ref/fb/pointlightentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PointLightEntityData](/vext/ref/fb/pointlightentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
