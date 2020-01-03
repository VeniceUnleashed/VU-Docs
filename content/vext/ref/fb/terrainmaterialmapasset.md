---
title: TerrainMaterialMapAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| TerrainMaterialMapAsset()                                                          | Create a new instance of this container type.                                                                                         |
| TerrainMaterialMapAsset(TerrainMaterialMapAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| TerrainMaterialMapAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [TerrainMaterialMapAsset](/vext/ref/fb/terrainmaterialmapasset/).                                      |
| TerrainMaterialMapAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainMaterialMapAsset](/vext/ref/fb/terrainmaterialmapasset/). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainMaterialMapAsset](/vext/ref/fb/terrainmaterialmapasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainMaterialMapAsset](/vext/ref/fb/terrainmaterialmapasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
