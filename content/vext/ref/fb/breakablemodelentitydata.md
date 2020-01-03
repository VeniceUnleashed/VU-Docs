---
title: BreakableModelEntityData
---
### Base Classes

[GamePhysicsEntityData](GamePhysicsEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| BreakableModelEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| BreakableModelEntityData(BreakableModelEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| BreakableModelEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [BreakableModelEntityData](BreakableModelEntityData).      |
| BreakableModelEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [BreakableModelEntityData](BreakableModelEntityData).                    |
| BreakableModelEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [BreakableModelEntityData](BreakableModelEntityData).              |
| BreakableModelEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [BreakableModelEntityData](BreakableModelEntityData).                            |
| BreakableModelEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [BreakableModelEntityData](BreakableModelEntityData).                    |
| BreakableModelEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BreakableModelEntityData](BreakableModelEntityData).              |
| BreakableModelEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BreakableModelEntityData](BreakableModelEntityData). |

## Properties

| Name                   | Type                                             | Description |
| ---------------------- | ------------------------------------------------ | ----------- |
| decalVolumeShader      | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| decalVolumeScaleFactor | number                                           |             |
| mesh                   | [MeshAsset](MeshAsset)                           |             |
| boneCount              | number                                           |             |
| edgeModelLightMapData  | [EdgeModelLightMapData](EdgeModelLightMapData)   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BreakableModelEntityData](BreakableModelEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BreakableModelEntityData](BreakableModelEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
