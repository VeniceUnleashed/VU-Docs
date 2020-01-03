---
title: TerrainQuadDecalData
---
### Base Classes

[VisualVectorShapeData](VisualVectorShapeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TerrainQuadDecalData()                                                          | Create a new instance of this container type.                                                                                   |
| TerrainQuadDecalData(TerrainQuadDecalData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TerrainQuadDecalData([VisualVectorShapeData](VisualVectorShapeData) other)      | Upcast an instance of type [VisualVectorShapeData](VisualVectorShapeData) to [TerrainQuadDecalData](TerrainQuadDecalData).      |
| TerrainQuadDecalData([VectorShapeData](VectorShapeData) other)                  | Upcast an instance of type [VectorShapeData](VectorShapeData) to [TerrainQuadDecalData](TerrainQuadDecalData).                  |
| TerrainQuadDecalData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [TerrainQuadDecalData](TerrainQuadDecalData).                      |
| TerrainQuadDecalData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TerrainQuadDecalData](TerrainQuadDecalData).                    |
| TerrainQuadDecalData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TerrainQuadDecalData](TerrainQuadDecalData).              |
| TerrainQuadDecalData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainQuadDecalData](TerrainQuadDecalData). |

## Properties

| Name              | Type                                                                           | Description |
| ----------------- | ------------------------------------------------------------------------------ | ----------- |
| userMasks         | [Vec4](/vext/ref/shared/class/Vec4)                                              |             |
| shader3dZOnly     | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset)                               |             |
| shader2d          | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset)                               |             |
| atlasTileTemplate | [TerrainQuadDecalAtlasTileTemplateData](TerrainQuadDecalAtlasTileTemplateData) |             |
| atlasTile         | [TerrainQuadDecalAtlasTile](TerrainQuadDecalAtlasTile)                         |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainQuadDecalData](TerrainQuadDecalData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainQuadDecalData](TerrainQuadDecalData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
