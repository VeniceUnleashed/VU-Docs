---
title: SingleTerrainLayerData
---
### Base Classes

[TerrainLayerData](/vext/ref/fb/terrainlayerdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SingleTerrainLayerData()                                                          | Create a new instance of this container type.                                                                                       |
| SingleTerrainLayerData(SingleTerrainLayerData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SingleTerrainLayerData([TerrainLayerData](/vext/ref/fb/terrainlayerdata/) other)                | Upcast an instance of type [TerrainLayerData](/vext/ref/fb/terrainlayerdata/) to [SingleTerrainLayerData](/vext/ref/fb/singleterrainlayerdata/).                |
| SingleTerrainLayerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SingleTerrainLayerData](/vext/ref/fb/singleterrainlayerdata/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SingleTerrainLayerData](/vext/ref/fb/singleterrainlayerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SingleTerrainLayerData](/vext/ref/fb/singleterrainlayerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
