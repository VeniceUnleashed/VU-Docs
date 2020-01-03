---
title: TerrainFillDecalData
---
### Base Classes

[VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TerrainFillDecalData()                                                          | Create a new instance of this container type.                                                                                   |
| TerrainFillDecalData(TerrainFillDecalData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TerrainFillDecalData([VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/) other)      | Upcast an instance of type [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/) to [TerrainFillDecalData](/vext/ref/fb/terrainfilldecaldata/).      |
| TerrainFillDecalData([VectorShapeData](/vext/ref/fb/vectorshapedata/) other)                  | Upcast an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata/) to [TerrainFillDecalData](/vext/ref/fb/terrainfilldecaldata/).                  |
| TerrainFillDecalData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [TerrainFillDecalData](/vext/ref/fb/terrainfilldecaldata/).                      |
| TerrainFillDecalData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TerrainFillDecalData](/vext/ref/fb/terrainfilldecaldata/).                    |
| TerrainFillDecalData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TerrainFillDecalData](/vext/ref/fb/terrainfilldecaldata/).              |
| TerrainFillDecalData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainFillDecalData](/vext/ref/fb/terrainfilldecaldata/). |

## Properties

| Name          | Type                                             | Description |
| ------------- | ------------------------------------------------ | ----------- |
| shader2d      | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| shader3dZOnly | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainFillDecalData](/vext/ref/fb/terrainfilldecaldata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainFillDecalData](/vext/ref/fb/terrainfilldecaldata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
