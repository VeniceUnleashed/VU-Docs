---
title: DynamicModelEntityData
---
### Base Classes

[DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                  |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DynamicModelEntityData()                                                                   | Create a new instance of this container type.                                                                                                |
| DynamicModelEntityData(DynamicModelEntityData other)                                       | Create a reference copy of an instance of the same type.                                                                                     |
| DynamicModelEntityData([DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData) other) | Upcast an instance of type [DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData) to [DynamicModelEntityData](DynamicModelEntityData). |
| DynamicModelEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)               | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [DynamicModelEntityData](DynamicModelEntityData).               |
| DynamicModelEntityData([GameEntityData](GameEntityData) other)                             | Upcast an instance of type [GameEntityData](GameEntityData) to [DynamicModelEntityData](DynamicModelEntityData).                             |
| DynamicModelEntityData([SpatialEntityData](SpatialEntityData) other)                       | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DynamicModelEntityData](DynamicModelEntityData).                       |
| DynamicModelEntityData([EntityData](EntityData) other)                                     | Upcast an instance of type [EntityData](EntityData) to [DynamicModelEntityData](DynamicModelEntityData).                                     |
| DynamicModelEntityData([GameObjectData](GameObjectData) other)                             | Upcast an instance of type [GameObjectData](GameObjectData) to [DynamicModelEntityData](DynamicModelEntityData).                             |
| DynamicModelEntityData([GameDataContainer](GameDataContainer) other)                       | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DynamicModelEntityData](DynamicModelEntityData).                       |
| DynamicModelEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicModelEntityData](DynamicModelEntityData).          |

## Properties

| Name        | Type                                   | Description |
| ----------- | -------------------------------------- | ----------- |
| part        | [PartComponentData](PartComponentData) |             |
| mesh        | [MeshAsset](MeshAsset)                 |             |
| noCollision | bool                                   |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DynamicModelEntityData](DynamicModelEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicModelEntityData](DynamicModelEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
