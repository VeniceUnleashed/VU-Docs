---
title: PhysicsMaterialsRasterData
---
### Base Classes

[RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsMaterialsRasterData()                                                          | Create a new instance of this container type.                                                                                               |
| PhysicsMaterialsRasterData(PhysicsMaterialsRasterData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PhysicsMaterialsRasterData([RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/) other)            | Upcast an instance of type [RasterQuadtreeData](/vext/ref/fb/rasterquadtreedata/) to [PhysicsMaterialsRasterData](/vext/ref/fb/physicsmaterialsrasterdata/).            |
| PhysicsMaterialsRasterData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PhysicsMaterialsRasterData](/vext/ref/fb/physicsmaterialsrasterdata/).                                      |
| PhysicsMaterialsRasterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsMaterialsRasterData](/vext/ref/fb/physicsmaterialsrasterdata/). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsMaterialsRasterData](/vext/ref/fb/physicsmaterialsrasterdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsMaterialsRasterData](/vext/ref/fb/physicsmaterialsrasterdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
