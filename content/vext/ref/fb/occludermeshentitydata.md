---
title: OccluderMeshEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| OccluderMeshEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| OccluderMeshEntityData(OccluderMeshEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| OccluderMeshEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [OccluderMeshEntityData](/vext/ref/fb/occludermeshentitydata/).              |
| OccluderMeshEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [OccluderMeshEntityData](/vext/ref/fb/occludermeshentitydata/).                            |
| OccluderMeshEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [OccluderMeshEntityData](/vext/ref/fb/occludermeshentitydata/).                    |
| OccluderMeshEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [OccluderMeshEntityData](/vext/ref/fb/occludermeshentitydata/).              |
| OccluderMeshEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OccluderMeshEntityData](/vext/ref/fb/occludermeshentitydata/). |

## Properties

| Name | Type                             | Description |
| ---- | -------------------------------- | ----------- |
| mesh | [RigidMeshAsset](/vext/ref/fb/rigidmeshasset/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [OccluderMeshEntityData](/vext/ref/fb/occludermeshentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OccluderMeshEntityData](/vext/ref/fb/occludermeshentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
