---
title: TerrainEntityData
---
### Base Classes

[GamePhysicsEntityData](GamePhysicsEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| TerrainEntityData()                                                          | Create a new instance of this container type.                                                                             |
| TerrainEntityData(TerrainEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| TerrainEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [TerrainEntityData](TerrainEntityData).      |
| TerrainEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [TerrainEntityData](TerrainEntityData).                    |
| TerrainEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [TerrainEntityData](TerrainEntityData).              |
| TerrainEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TerrainEntityData](TerrainEntityData).                            |
| TerrainEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TerrainEntityData](TerrainEntityData).                    |
| TerrainEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TerrainEntityData](TerrainEntityData).              |
| TerrainEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainEntityData](TerrainEntityData). |

## Properties

| Name          | Type                                           | Description |
| ------------- | ---------------------------------------------- | ----------- |
| terrainAsset  | [TerrainData](TerrainData)                     |             |
| waterMaterial | [MaterialContainerPair](MaterialContainerPair) |             |
| visible       | bool                                           |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainEntityData](TerrainEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainEntityData](TerrainEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
