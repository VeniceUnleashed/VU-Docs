---
title: TerrainMaterialTreeAsset
---
### Base Classes

[RasterTreeAsset](/vext/ref/fb/rastertreeasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| TerrainMaterialTreeAsset()                                                          | Create a new instance of this container type.                                                                                           |
| TerrainMaterialTreeAsset(TerrainMaterialTreeAsset other)                            | Create a reference copy of an instance of the same type.                                                                                |
| TerrainMaterialTreeAsset([RasterTreeAsset](/vext/ref/fb/rastertreeasset/) other)                  | Upcast an instance of type [RasterTreeAsset](/vext/ref/fb/rastertreeasset/) to [TerrainMaterialTreeAsset](/vext/ref/fb/terrainmaterialtreeasset/).                  |
| TerrainMaterialTreeAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainMaterialTreeAsset](/vext/ref/fb/terrainmaterialtreeasset/). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainMaterialTreeAsset](/vext/ref/fb/terrainmaterialtreeasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainMaterialTreeAsset](/vext/ref/fb/terrainmaterialtreeasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
