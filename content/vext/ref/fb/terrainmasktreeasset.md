---
title: TerrainMaskTreeAsset
---
### Base Classes

[RasterTreeAsset](/vext/ref/fb/rastertreeasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TerrainMaskTreeAsset()                                                          | Create a new instance of this container type.                                                                                   |
| TerrainMaskTreeAsset(TerrainMaskTreeAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TerrainMaskTreeAsset([RasterTreeAsset](/vext/ref/fb/rastertreeasset/) other)                  | Upcast an instance of type [RasterTreeAsset](/vext/ref/fb/rastertreeasset/) to [TerrainMaskTreeAsset](/vext/ref/fb/terrainmasktreeasset/).                  |
| TerrainMaskTreeAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainMaskTreeAsset](/vext/ref/fb/terrainmasktreeasset/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainMaskTreeAsset](/vext/ref/fb/terrainmasktreeasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainMaskTreeAsset](/vext/ref/fb/terrainmasktreeasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
