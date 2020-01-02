---
title: CompositeMeshAsset
---
### Base Classes

[MeshAsset](MeshAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CompositeMeshAsset()                                                          | Create a new instance of this container type.                                                                               |
| CompositeMeshAsset(CompositeMeshAsset other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| CompositeMeshAsset([MeshAsset](MeshAsset) other)                              | Upcast an instance of type [MeshAsset](MeshAsset) to [CompositeMeshAsset](CompositeMeshAsset).                              |
| CompositeMeshAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [CompositeMeshAsset](CompositeMeshAsset).                                      |
| CompositeMeshAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompositeMeshAsset](CompositeMeshAsset). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [CompositeMeshAsset](CompositeMeshAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CompositeMeshAsset](CompositeMeshAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
