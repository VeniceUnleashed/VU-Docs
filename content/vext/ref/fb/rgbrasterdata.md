---
title: RGBRasterData
---
### Base Classes

[RasterQuadtreeData](RasterQuadtreeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| RGBRasterData()                                                          | Create a new instance of this container type.                                                                     |
| RGBRasterData(RGBRasterData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| RGBRasterData([RasterQuadtreeData](RasterQuadtreeData) other)            | Upcast an instance of type [RasterQuadtreeData](RasterQuadtreeData) to [RGBRasterData](RGBRasterData).            |
| RGBRasterData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [RGBRasterData](RGBRasterData).                                      |
| RGBRasterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RGBRasterData](RGBRasterData). |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [RGBRasterData](RGBRasterData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RGBRasterData](RGBRasterData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
