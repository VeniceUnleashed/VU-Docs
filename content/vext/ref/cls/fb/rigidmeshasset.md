---
title: RigidMeshAsset (Frostbite Container)
---
### Base Classes

[MeshAsset](MeshAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| RigidMeshAsset()                                                          | Create a new instance of this container type.                                                                       |
| RigidMeshAsset(RigidMeshAsset other)                                      | Create a reference copy of an instance of the same type.                                                            |
| RigidMeshAsset([MeshAsset](MeshAsset) other)                              | Upcast an instance of type [MeshAsset](MeshAsset) to [RigidMeshAsset](RigidMeshAsset).                              |
| RigidMeshAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [RigidMeshAsset](RigidMeshAsset).                                      |
| RigidMeshAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RigidMeshAsset](RigidMeshAsset). |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [RigidMeshAsset](RigidMeshAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RigidMeshAsset](RigidMeshAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
