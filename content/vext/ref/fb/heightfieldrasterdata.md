---
title: HeightfieldRasterData
---
### Base Classes

[RasterQuadtreeData](RasterQuadtreeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| HeightfieldRasterData()                                                          | Create a new instance of this container type.                                                                                     |
| HeightfieldRasterData(HeightfieldRasterData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| HeightfieldRasterData([RasterQuadtreeData](RasterQuadtreeData) other)            | Upcast an instance of type [RasterQuadtreeData](RasterQuadtreeData) to [HeightfieldRasterData](HeightfieldRasterData).            |
| HeightfieldRasterData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [HeightfieldRasterData](HeightfieldRasterData).                                      |
| HeightfieldRasterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HeightfieldRasterData](HeightfieldRasterData). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [HeightfieldRasterData](HeightfieldRasterData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HeightfieldRasterData](HeightfieldRasterData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
