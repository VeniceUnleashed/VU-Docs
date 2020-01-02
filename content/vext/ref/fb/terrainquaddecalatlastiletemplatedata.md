---
title: TerrainQuadDecalAtlasTileTemplateData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                      | Description                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TerrainQuadDecalAtlasTileTemplateData()                                                          | Create a new instance of this container type.                                                                                                                     |
| TerrainQuadDecalAtlasTileTemplateData(TerrainQuadDecalAtlasTileTemplateData other)               | Create a reference copy of an instance of the same type.                                                                                                          |
| TerrainQuadDecalAtlasTileTemplateData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TerrainQuadDecalAtlasTileTemplateData](TerrainQuadDecalAtlasTileTemplateData).                                      |
| TerrainQuadDecalAtlasTileTemplateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainQuadDecalAtlasTileTemplateData](TerrainQuadDecalAtlasTileTemplateData). |

## Properties

| Name      | Type                                                   | Description |
| --------- | ------------------------------------------------------ | ----------- |
| atlasTile | [TerrainQuadDecalAtlasTile](TerrainQuadDecalAtlasTile) |             |

## Methods

| Type                                                                           | Name            | Parameters                                     |
| ------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TerrainQuadDecalAtlasTileTemplateData](TerrainQuadDecalAtlasTileTemplateData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainQuadDecalAtlasTileTemplateData](TerrainQuadDecalAtlasTileTemplateData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
