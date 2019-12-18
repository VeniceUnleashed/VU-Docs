---
title: VirtualRasterQuadtreeData (Frostbite Container)
---
### Base Classes

[RasterQuadtreeData](RasterQuadtreeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VirtualRasterQuadtreeData()                                                          | Create a new instance of this container type.                                                                                             |
| VirtualRasterQuadtreeData(VirtualRasterQuadtreeData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VirtualRasterQuadtreeData([RasterQuadtreeData](RasterQuadtreeData) other)            | Upcast an instance of type [RasterQuadtreeData](RasterQuadtreeData) to [VirtualRasterQuadtreeData](VirtualRasterQuadtreeData).            |
| VirtualRasterQuadtreeData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VirtualRasterQuadtreeData](VirtualRasterQuadtreeData).                                      |
| VirtualRasterQuadtreeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VirtualRasterQuadtreeData](VirtualRasterQuadtreeData). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VirtualRasterQuadtreeData](VirtualRasterQuadtreeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VirtualRasterQuadtreeData](VirtualRasterQuadtreeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
