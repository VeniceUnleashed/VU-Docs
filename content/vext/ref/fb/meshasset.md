---
title: MeshAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| MeshAsset()                                                          | Create a new instance of this container type.                                                             |
| MeshAsset(MeshAsset other)                                           | Create a reference copy of an instance of the same type.                                                  |
| MeshAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [MeshAsset](MeshAsset).                                      |
| MeshAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshAsset](MeshAsset). |

## Properties

| Name                      | Type                             | Description |
| ------------------------- | -------------------------------- | ----------- |
| lodGroup                  | [MeshLodGroup](MeshLodGroup)     |             |
| lodScale                  | number                           |             |
| cullScale                 | number                           |             |
| nameHash                  | number                           |             |
| enlightenType             | [EnlightenType](EnlightenType)   |             |
| materials                 | [MeshMaterial](MeshMaterial)\[\] |             |
| occluderHighPriority      | bool                             |             |
| streamingEnable           | bool                             |             |
| destructionMaterialEnable | bool                             |             |
| occluderMeshEnable        | bool                             |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [MeshAsset](MeshAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeshAsset](MeshAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
