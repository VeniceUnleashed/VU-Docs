---
title: RigidMeshEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| RigidMeshEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| RigidMeshEntityData(RigidMeshEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| RigidMeshEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [RigidMeshEntityData](/vext/ref/fb/rigidmeshentitydata/).              |
| RigidMeshEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [RigidMeshEntityData](/vext/ref/fb/rigidmeshentitydata/).                            |
| RigidMeshEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RigidMeshEntityData](/vext/ref/fb/rigidmeshentitydata/).                    |
| RigidMeshEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RigidMeshEntityData](/vext/ref/fb/rigidmeshentitydata/).              |
| RigidMeshEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RigidMeshEntityData](/vext/ref/fb/rigidmeshentitydata/). |

## Properties

| Name | Type                             | Description |
| ---- | -------------------------------- | ----------- |
| mesh | [RigidMeshAsset](/vext/ref/fb/rigidmeshasset/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [RigidMeshEntityData](/vext/ref/fb/rigidmeshentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RigidMeshEntityData](/vext/ref/fb/rigidmeshentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
