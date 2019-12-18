---
title: RigidMeshEntityData (Frostbite Container)
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| RigidMeshEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| RigidMeshEntityData(RigidMeshEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| RigidMeshEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [RigidMeshEntityData](RigidMeshEntityData).              |
| RigidMeshEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [RigidMeshEntityData](RigidMeshEntityData).                            |
| RigidMeshEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RigidMeshEntityData](RigidMeshEntityData).                    |
| RigidMeshEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RigidMeshEntityData](RigidMeshEntityData).              |
| RigidMeshEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RigidMeshEntityData](RigidMeshEntityData). |

## Properties

| Name | Type                             | Description |
| ---- | -------------------------------- | ----------- |
| mesh | [RigidMeshAsset](RigidMeshAsset) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [RigidMeshEntityData](RigidMeshEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RigidMeshEntityData](RigidMeshEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
