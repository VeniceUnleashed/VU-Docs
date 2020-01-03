---
title: TerrainColorTreeAsset
---
### Base Classes

[RasterTreeAsset](RasterTreeAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| TerrainColorTreeAsset()                                                          | Create a new instance of this container type.                                                                                     |
| TerrainColorTreeAsset(TerrainColorTreeAsset other)                               | Create a reference copy of an instance of the same type.                                                                          |
| TerrainColorTreeAsset([RasterTreeAsset](RasterTreeAsset) other)                  | Upcast an instance of type [RasterTreeAsset](RasterTreeAsset) to [TerrainColorTreeAsset](TerrainColorTreeAsset).                  |
| TerrainColorTreeAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainColorTreeAsset](TerrainColorTreeAsset). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainColorTreeAsset](TerrainColorTreeAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainColorTreeAsset](TerrainColorTreeAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
