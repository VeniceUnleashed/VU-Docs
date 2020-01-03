---
title: GroundHeightEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| GroundHeightEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| GroundHeightEntityData(GroundHeightEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| GroundHeightEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [GroundHeightEntityData](/vext/ref/fb/groundheightentitydata/).              |
| GroundHeightEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [GroundHeightEntityData](/vext/ref/fb/groundheightentitydata/).                            |
| GroundHeightEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [GroundHeightEntityData](/vext/ref/fb/groundheightentitydata/).                    |
| GroundHeightEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [GroundHeightEntityData](/vext/ref/fb/groundheightentitydata/).              |
| GroundHeightEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GroundHeightEntityData](/vext/ref/fb/groundheightentitydata/). |

## Properties

| Name | Type                                 | Description |
| ---- | ------------------------------------ | ----------- |
| data | [GroundHeightData](/vext/ref/fb/groundheightdata/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GroundHeightEntityData](/vext/ref/fb/groundheightentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GroundHeightEntityData](/vext/ref/fb/groundheightentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
