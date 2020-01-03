---
title: RasterQuadtreeNodeData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| RasterQuadtreeNodeData()                                                          | Create a new instance of this container type.                                                                                       |
| RasterQuadtreeNodeData(RasterQuadtreeNodeData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| RasterQuadtreeNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RasterQuadtreeNodeData](/vext/ref/fb/rasterquadtreenodedata/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [RasterQuadtreeNodeData](/vext/ref/fb/rasterquadtreenodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RasterQuadtreeNodeData](/vext/ref/fb/rasterquadtreenodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
