---
title: PhysicsMaterialsRasterData (Frostbite Container)
---
### Base Classes

[RasterQuadtreeData](RasterQuadtreeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsMaterialsRasterData()                                                          | Create a new instance of this container type.                                                                                               |
| PhysicsMaterialsRasterData(PhysicsMaterialsRasterData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PhysicsMaterialsRasterData([RasterQuadtreeData](RasterQuadtreeData) other)            | Upcast an instance of type [RasterQuadtreeData](RasterQuadtreeData) to [PhysicsMaterialsRasterData](PhysicsMaterialsRasterData).            |
| PhysicsMaterialsRasterData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PhysicsMaterialsRasterData](PhysicsMaterialsRasterData).                                      |
| PhysicsMaterialsRasterData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PhysicsMaterialsRasterData](PhysicsMaterialsRasterData). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsMaterialsRasterData](PhysicsMaterialsRasterData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PhysicsMaterialsRasterData](PhysicsMaterialsRasterData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
