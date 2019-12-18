---
title: SingleTerrainLayerData (Frostbite Container)
---
### Base Classes

[TerrainLayerData](TerrainLayerData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SingleTerrainLayerData()                                                          | Create a new instance of this container type.                                                                                       |
| SingleTerrainLayerData(SingleTerrainLayerData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SingleTerrainLayerData([TerrainLayerData](TerrainLayerData) other)                | Upcast an instance of type [TerrainLayerData](TerrainLayerData) to [SingleTerrainLayerData](SingleTerrainLayerData).                |
| SingleTerrainLayerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SingleTerrainLayerData](SingleTerrainLayerData). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SingleTerrainLayerData](SingleTerrainLayerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SingleTerrainLayerData](SingleTerrainLayerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
