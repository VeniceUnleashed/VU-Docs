---
title: RigidMeshAsset
---
### Base Classes

[MeshAsset](/vext/ref/fb/meshasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| RigidMeshAsset()                                                          | Create a new instance of this container type.                                                                       |
| RigidMeshAsset(RigidMeshAsset other)                                      | Create a reference copy of an instance of the same type.                                                            |
| RigidMeshAsset([MeshAsset](/vext/ref/fb/meshasset/) other)                              | Upcast an instance of type [MeshAsset](/vext/ref/fb/meshasset/) to [RigidMeshAsset](/vext/ref/fb/rigidmeshasset/).                              |
| RigidMeshAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [RigidMeshAsset](/vext/ref/fb/rigidmeshasset/).                                      |
| RigidMeshAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RigidMeshAsset](/vext/ref/fb/rigidmeshasset/). |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [RigidMeshAsset](/vext/ref/fb/rigidmeshasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RigidMeshAsset](/vext/ref/fb/rigidmeshasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
