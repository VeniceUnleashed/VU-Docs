---
title: OccluderMeshEntityData
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| OccluderMeshEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| OccluderMeshEntityData(OccluderMeshEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| OccluderMeshEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [OccluderMeshEntityData](OccluderMeshEntityData).              |
| OccluderMeshEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [OccluderMeshEntityData](OccluderMeshEntityData).                            |
| OccluderMeshEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [OccluderMeshEntityData](OccluderMeshEntityData).                    |
| OccluderMeshEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [OccluderMeshEntityData](OccluderMeshEntityData).              |
| OccluderMeshEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OccluderMeshEntityData](OccluderMeshEntityData). |

## Properties

| Name | Type                             | Description |
| ---- | -------------------------------- | ----------- |
| mesh | [RigidMeshAsset](RigidMeshAsset) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [OccluderMeshEntityData](OccluderMeshEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OccluderMeshEntityData](OccluderMeshEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
