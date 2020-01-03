---
title: ByteRasterData
---
### Base Classes

[RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ByteRasterData()                                                          | Create a new instance of this container type.                                                                       |
| ByteRasterData(ByteRasterData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| ByteRasterData([RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/) other)            | Upcast an instance of type [RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/) to [ByteRasterData](/vext/ref/fb/byterasterdata/).            |
| ByteRasterData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ByteRasterData](/vext/ref/fb/byterasterdata/).                                      |
| ByteRasterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ByteRasterData](/vext/ref/fb/byterasterdata/). |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [ByteRasterData](/vext/ref/fb/byterasterdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ByteRasterData](/vext/ref/fb/byterasterdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
