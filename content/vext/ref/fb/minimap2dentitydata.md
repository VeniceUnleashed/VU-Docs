---
title: Minimap2DEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Minimap2DEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| Minimap2DEntityData(Minimap2DEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| Minimap2DEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata/).                    |
| Minimap2DEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata/).              |
| Minimap2DEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata/).                            |
| Minimap2DEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata/).                    |
| Minimap2DEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata/).              |
| Minimap2DEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata/). |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| cameraTransform     | [Vec3](/vext/ref/shared/class/vec3) |             |
| imageHeight         | number                            |             |
| imageWidth          | number                            |             |
| antialiasMultiplier | number                            |             |
| terrainHeight       | number                            |             |
| fov                 | number                            |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Minimap2DEntityData](/vext/ref/fb/minimap2dentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
