---
title: TerrainQuadDecalAtlasTileTemplateData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                      | Description                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TerrainQuadDecalAtlasTileTemplateData()                                                          | Create a new instance of this container type.                                                                                                                     |
| TerrainQuadDecalAtlasTileTemplateData(TerrainQuadDecalAtlasTileTemplateData other)               | Create a reference copy of an instance of the same type.                                                                                                          |
| TerrainQuadDecalAtlasTileTemplateData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [TerrainQuadDecalAtlasTileTemplateData](/vext/ref/fb/terrainquaddecalatlastiletemplatedata/).                                      |
| TerrainQuadDecalAtlasTileTemplateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainQuadDecalAtlasTileTemplateData](/vext/ref/fb/terrainquaddecalatlastiletemplatedata/). |

## Properties

| Name      | Type                                                   | Description |
| --------- | ------------------------------------------------------ | ----------- |
| atlasTile | [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile/) |             |

## Methods

| Type                                                                           | Name            | Parameters                                     |
| ------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TerrainQuadDecalAtlasTileTemplateData](/vext/ref/fb/terrainquaddecalatlastiletemplatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainQuadDecalAtlasTileTemplateData](/vext/ref/fb/terrainquaddecalatlastiletemplatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
