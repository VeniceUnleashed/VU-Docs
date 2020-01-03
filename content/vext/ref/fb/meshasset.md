---
title: MeshAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| MeshAsset()                                                          | Create a new instance of this container type.                                                             |
| MeshAsset(MeshAsset other)                                           | Create a reference copy of an instance of the same type.                                                  |
| MeshAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [MeshAsset](/vext/ref/fb/meshasset/).                                      |
| MeshAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshAsset](/vext/ref/fb/meshasset/). |

## Properties

| Name                      | Type                             | Description |
| ------------------------- | -------------------------------- | ----------- |
| lodGroup                  | [MeshLodGroup](/vext/ref/fb/meshlodgroup/)     |             |
| lodScale                  | number                           |             |
| cullScale                 | number                           |             |
| nameHash                  | number                           |             |
| enlightenType             | [EnlightenType](/vext/ref/fb/enlightentype/)   |             |
| materials                 | [MeshMaterial](/vext/ref/fb/meshmaterial/)\[\] |             |
| occluderHighPriority      | bool                             |             |
| streamingEnable           | bool                             |             |
| destructionMaterialEnable | bool                             |             |
| occluderMeshEnable        | bool                             |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [MeshAsset](/vext/ref/fb/meshasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeshAsset](/vext/ref/fb/meshasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
