---
title: TerrainFillDecalData
---
### Base Classes

[VisualVectorShapeData](VisualVectorShapeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TerrainFillDecalData()                                                          | Create a new instance of this container type.                                                                                   |
| TerrainFillDecalData(TerrainFillDecalData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TerrainFillDecalData([VisualVectorShapeData](VisualVectorShapeData) other)      | Upcast an instance of type [VisualVectorShapeData](VisualVectorShapeData) to [TerrainFillDecalData](TerrainFillDecalData).      |
| TerrainFillDecalData([VectorShapeData](VectorShapeData) other)                  | Upcast an instance of type [VectorShapeData](VectorShapeData) to [TerrainFillDecalData](TerrainFillDecalData).                  |
| TerrainFillDecalData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [TerrainFillDecalData](TerrainFillDecalData).                      |
| TerrainFillDecalData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TerrainFillDecalData](TerrainFillDecalData).                    |
| TerrainFillDecalData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TerrainFillDecalData](TerrainFillDecalData).              |
| TerrainFillDecalData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainFillDecalData](TerrainFillDecalData). |

## Properties

| Name          | Type                                             | Description |
| ------------- | ------------------------------------------------ | ----------- |
| shader2d      | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| shader3dZOnly | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainFillDecalData](TerrainFillDecalData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainFillDecalData](TerrainFillDecalData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
