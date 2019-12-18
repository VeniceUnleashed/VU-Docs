---
title: TerrainMaterialTreeAsset (Frostbite Container)
---
### Base Classes

[RasterTreeAsset](RasterTreeAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| TerrainMaterialTreeAsset()                                                          | Create a new instance of this container type.                                                                                           |
| TerrainMaterialTreeAsset(TerrainMaterialTreeAsset other)                            | Create a reference copy of an instance of the same type.                                                                                |
| TerrainMaterialTreeAsset([RasterTreeAsset](RasterTreeAsset) other)                  | Upcast an instance of type [RasterTreeAsset](RasterTreeAsset) to [TerrainMaterialTreeAsset](TerrainMaterialTreeAsset).                  |
| TerrainMaterialTreeAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TerrainMaterialTreeAsset](TerrainMaterialTreeAsset). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainMaterialTreeAsset](TerrainMaterialTreeAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TerrainMaterialTreeAsset](TerrainMaterialTreeAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
