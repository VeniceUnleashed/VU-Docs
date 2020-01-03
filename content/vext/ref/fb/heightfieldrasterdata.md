---
title: HeightfieldRasterData
---
### Base Classes

[RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| HeightfieldRasterData()                                                          | Create a new instance of this container type.                                                                                     |
| HeightfieldRasterData(HeightfieldRasterData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| HeightfieldRasterData([RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/) other)            | Upcast an instance of type [RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/) to [HeightfieldRasterData](/vext/ref/fb/heightfieldrasterdata/).            |
| HeightfieldRasterData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [HeightfieldRasterData](/vext/ref/fb/heightfieldrasterdata/).                                      |
| HeightfieldRasterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HeightfieldRasterData](/vext/ref/fb/heightfieldrasterdata/). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [HeightfieldRasterData](/vext/ref/fb/heightfieldrasterdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HeightfieldRasterData](/vext/ref/fb/heightfieldrasterdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
