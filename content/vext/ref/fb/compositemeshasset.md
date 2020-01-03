---
title: CompositeMeshAsset
---
### Base Classes

[MeshAsset](/vext/ref/fb/meshasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CompositeMeshAsset()                                                          | Create a new instance of this container type.                                                                               |
| CompositeMeshAsset(CompositeMeshAsset other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| CompositeMeshAsset([MeshAsset](/vext/ref/fb/meshasset/) other)                              | Upcast an instance of type [MeshAsset](/vext/ref/fb/meshasset/) to [CompositeMeshAsset](/vext/ref/fb/compositemeshasset/).                              |
| CompositeMeshAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [CompositeMeshAsset](/vext/ref/fb/compositemeshasset/).                                      |
| CompositeMeshAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompositeMeshAsset](/vext/ref/fb/compositemeshasset/). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [CompositeMeshAsset](/vext/ref/fb/compositemeshasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CompositeMeshAsset](/vext/ref/fb/compositemeshasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
