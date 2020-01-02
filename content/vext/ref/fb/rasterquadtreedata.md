---
title: RasterQuadtreeData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| RasterQuadtreeData()                                                          | Create a new instance of this container type.                                                                               |
| RasterQuadtreeData(RasterQuadtreeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| RasterQuadtreeData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [RasterQuadtreeData](RasterQuadtreeData).                                      |
| RasterQuadtreeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RasterQuadtreeData](RasterQuadtreeData). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [RasterQuadtreeData](RasterQuadtreeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RasterQuadtreeData](RasterQuadtreeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
