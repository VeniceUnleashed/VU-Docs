---
title: RoadData
---
### Base Classes

[RibbonData](RibbonData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                         | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| RoadData()                                                          | Create a new instance of this container type.                                                           |
| RoadData(RoadData other)                                            | Create a reference copy of an instance of the same type.                                                |
| RoadData([RibbonData](RibbonData) other)                            | Upcast an instance of type [RibbonData](RibbonData) to [RoadData](RoadData).                            |
| RoadData([VisualVectorShapeData](VisualVectorShapeData) other)      | Upcast an instance of type [VisualVectorShapeData](VisualVectorShapeData) to [RoadData](RoadData).      |
| RoadData([VectorShapeData](VectorShapeData) other)                  | Upcast an instance of type [VectorShapeData](VectorShapeData) to [RoadData](RoadData).                  |
| RoadData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [RoadData](RoadData).                      |
| RoadData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RoadData](RoadData).                    |
| RoadData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RoadData](RoadData).              |
| RoadData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RoadData](RoadData). |

## Properties

| Name           | Type                                             | Description |
| -------------- | ------------------------------------------------ | ----------- |
| shader2d       | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| shader3dZOnly  | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| uvTileFactor   | number                                           |             |
| stickToTerrain | bool                                             |             |

## Methods

| Type                 | Name            | Parameters                                     |
| -------------------- | --------------- | ---------------------------------------------- |
| [RoadData](RoadData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RoadData](RoadData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
