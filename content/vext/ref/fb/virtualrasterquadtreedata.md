---
title: VirtualRasterQuadtreeData
---
### Base Classes

[RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VirtualRasterQuadtreeData()                                                          | Create a new instance of this container type.                                                                                             |
| VirtualRasterQuadtreeData(VirtualRasterQuadtreeData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VirtualRasterQuadtreeData([RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/) other)            | Upcast an instance of type [RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/) to [VirtualRasterQuadtreeData](/vext/ref/fb/virtualrasterquadtreedata/).            |
| VirtualRasterQuadtreeData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VirtualRasterQuadtreeData](/vext/ref/fb/virtualrasterquadtreedata/).                                      |
| VirtualRasterQuadtreeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VirtualRasterQuadtreeData](/vext/ref/fb/virtualrasterquadtreedata/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VirtualRasterQuadtreeData](/vext/ref/fb/virtualrasterquadtreedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VirtualRasterQuadtreeData](/vext/ref/fb/virtualrasterquadtreedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
