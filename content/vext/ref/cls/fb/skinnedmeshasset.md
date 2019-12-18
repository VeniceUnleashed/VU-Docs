---
title: SkinnedMeshAsset (Frostbite Container)
---
### Base Classes

[MeshAsset](MeshAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SkinnedMeshAsset()                                                          | Create a new instance of this container type.                                                                           |
| SkinnedMeshAsset(SkinnedMeshAsset other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SkinnedMeshAsset([MeshAsset](MeshAsset) other)                              | Upcast an instance of type [MeshAsset](MeshAsset) to [SkinnedMeshAsset](SkinnedMeshAsset).                              |
| SkinnedMeshAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SkinnedMeshAsset](SkinnedMeshAsset).                                      |
| SkinnedMeshAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SkinnedMeshAsset](SkinnedMeshAsset). |

## Properties

| Name                      | Type                              | Description |
| ------------------------- | --------------------------------- | ----------- |
| boundingBoxPositionOffset | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| boundingBoxSizeOffset     | [Vec3](/vext/ref/cls/shr/Vec3) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SkinnedMeshAsset](SkinnedMeshAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SkinnedMeshAsset](SkinnedMeshAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
