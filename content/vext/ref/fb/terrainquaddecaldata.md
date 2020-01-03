---
title: TerrainQuadDecalData
---
### Base Classes

[VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TerrainQuadDecalData()                                                          | Create a new instance of this container type.                                                                                   |
| TerrainQuadDecalData(TerrainQuadDecalData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TerrainQuadDecalData([VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/) other)      | Upcast an instance of type [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/) to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata/).      |
| TerrainQuadDecalData([VectorShapeData](/vext/ref/fb/vectorshapedata/) other)                  | Upcast an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata/) to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata/).                  |
| TerrainQuadDecalData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata/).                      |
| TerrainQuadDecalData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata/).                    |
| TerrainQuadDecalData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata/).              |
| TerrainQuadDecalData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata/). |

## Properties

| Name              | Type                                                                           | Description |
| ----------------- | ------------------------------------------------------------------------------ | ----------- |
| userMasks         | [Vec4](/vext/ref/shared/class/vec4)                                              |             |
| shader3dZOnly     | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/)                               |             |
| shader2d          | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/)                               |             |
| atlasTileTemplate | [TerrainQuadDecalAtlasTileTemplateData](/vext/ref/fb/terrainquaddecalatlastiletemplatedata/) |             |
| atlasTile         | [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile/)                         |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainQuadDecalData](/vext/ref/fb/terrainquaddecaldata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
