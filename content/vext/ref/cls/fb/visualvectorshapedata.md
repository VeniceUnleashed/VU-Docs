---
title: VisualVectorShapeData (Frostbite Container)
---
### Base Classes

[VectorShapeData](VectorShapeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VisualVectorShapeData()                                                          | Create a new instance of this container type.                                                                                     |
| VisualVectorShapeData(VisualVectorShapeData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VisualVectorShapeData([VectorShapeData](VectorShapeData) other)                  | Upcast an instance of type [VectorShapeData](VectorShapeData) to [VisualVectorShapeData](VisualVectorShapeData).                  |
| VisualVectorShapeData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [VisualVectorShapeData](VisualVectorShapeData).                      |
| VisualVectorShapeData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VisualVectorShapeData](VisualVectorShapeData).                    |
| VisualVectorShapeData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VisualVectorShapeData](VisualVectorShapeData).              |
| VisualVectorShapeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VisualVectorShapeData](VisualVectorShapeData). |

## Properties

| Name                     | Type                                             | Description |
| ------------------------ | ------------------------------------------------ | ----------- |
| errorTolerance           | number                                           |             |
| shader3d                 | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| drawOrderIndex           | number                                           |             |
| tessellationTriangleSize | number                                           |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VisualVectorShapeData](VisualVectorShapeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VisualVectorShapeData](VisualVectorShapeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
