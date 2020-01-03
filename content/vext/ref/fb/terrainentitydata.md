---
title: TerrainEntityData
---
### Base Classes

[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| TerrainEntityData()                                                          | Create a new instance of this container type.                                                                             |
| TerrainEntityData(TerrainEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| TerrainEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [TerrainEntityData](/vext/ref/fb/terrainentitydata/).      |
| TerrainEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [TerrainEntityData](/vext/ref/fb/terrainentitydata/).                    |
| TerrainEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [TerrainEntityData](/vext/ref/fb/terrainentitydata/).              |
| TerrainEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TerrainEntityData](/vext/ref/fb/terrainentitydata/).                            |
| TerrainEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TerrainEntityData](/vext/ref/fb/terrainentitydata/).                    |
| TerrainEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TerrainEntityData](/vext/ref/fb/terrainentitydata/).              |
| TerrainEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainEntityData](/vext/ref/fb/terrainentitydata/). |

## Properties

| Name          | Type                                           | Description |
| ------------- | ---------------------------------------------- | ----------- |
| terrainAsset  | [TerrainData](/vext/ref/fb/terraindata/)                     |             |
| waterMaterial | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/) |             |
| visible       | bool                                           |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainEntityData](/vext/ref/fb/terrainentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainEntityData](/vext/ref/fb/terrainentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
