---
title: SkinnedMeshAsset
---
### Base Classes

[MeshAsset](/vext/ref/fb/meshasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SkinnedMeshAsset()                                                          | Create a new instance of this container type.                                                                           |
| SkinnedMeshAsset(SkinnedMeshAsset other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SkinnedMeshAsset([MeshAsset](/vext/ref/fb/meshasset/) other)                              | Upcast an instance of type [MeshAsset](/vext/ref/fb/meshasset/) to [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/).                              |
| SkinnedMeshAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/).                                      |
| SkinnedMeshAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/). |

## Properties

| Name                      | Type                              | Description |
| ------------------------- | --------------------------------- | ----------- |
| boundingBoxPositionOffset | [Vec3](/vext/ref/shared/class/vec3) |             |
| boundingBoxSizeOffset     | [Vec3](/vext/ref/shared/class/vec3) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
