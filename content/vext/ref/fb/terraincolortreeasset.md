---
title: TerrainColorTreeAsset
---
### Base Classes

[RasterTreeAsset](/vext/ref/fb/rastertreeasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| TerrainColorTreeAsset()                                                          | Create a new instance of this container type.                                                                                     |
| TerrainColorTreeAsset(TerrainColorTreeAsset other)                               | Create a reference copy of an instance of the same type.                                                                          |
| TerrainColorTreeAsset([RasterTreeAsset](/vext/ref/fb/rastertreeasset/) other)                  | Upcast an instance of type [RasterTreeAsset](/vext/ref/fb/rastertreeasset/) to [TerrainColorTreeAsset](/vext/ref/fb/terraincolortreeasset/).                  |
| TerrainColorTreeAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainColorTreeAsset](/vext/ref/fb/terraincolortreeasset/). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainColorTreeAsset](/vext/ref/fb/terraincolortreeasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainColorTreeAsset](/vext/ref/fb/terraincolortreeasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
