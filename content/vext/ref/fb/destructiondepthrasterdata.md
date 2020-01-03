---
title: DestructionDepthRasterData
---
### Base Classes

[RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionDepthRasterData()                                                          | Create a new instance of this container type.                                                                                               |
| DestructionDepthRasterData(DestructionDepthRasterData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| DestructionDepthRasterData([RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/) other)            | Upcast an instance of type [RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/) to [DestructionDepthRasterData](/vext/ref/fb/destructiondepthrasterdata/).            |
| DestructionDepthRasterData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [DestructionDepthRasterData](/vext/ref/fb/destructiondepthrasterdata/).                                      |
| DestructionDepthRasterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionDepthRasterData](/vext/ref/fb/destructiondepthrasterdata/). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DestructionDepthRasterData](/vext/ref/fb/destructiondepthrasterdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionDepthRasterData](/vext/ref/fb/destructiondepthrasterdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
