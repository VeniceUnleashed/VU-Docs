---
title: DestructionDepthRasterData
---
### Base Classes

[RasterQuadtreeData](RasterQuadtreeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionDepthRasterData()                                                          | Create a new instance of this container type.                                                                                               |
| DestructionDepthRasterData(DestructionDepthRasterData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| DestructionDepthRasterData([RasterQuadtreeData](RasterQuadtreeData) other)            | Upcast an instance of type [RasterQuadtreeData](RasterQuadtreeData) to [DestructionDepthRasterData](DestructionDepthRasterData).            |
| DestructionDepthRasterData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [DestructionDepthRasterData](DestructionDepthRasterData).                                      |
| DestructionDepthRasterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionDepthRasterData](DestructionDepthRasterData). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DestructionDepthRasterData](DestructionDepthRasterData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionDepthRasterData](DestructionDepthRasterData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
