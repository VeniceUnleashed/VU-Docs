---
title: VisualVectorShapeData
---
### Base Classes

[VectorShapeData](/vext/ref/fb/vectorshapedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VisualVectorShapeData()                                                          | Create a new instance of this container type.                                                                                     |
| VisualVectorShapeData(VisualVectorShapeData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VisualVectorShapeData([VectorShapeData](/vext/ref/fb/vectorshapedata/) other)                  | Upcast an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata/) to [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/).                  |
| VisualVectorShapeData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/).                      |
| VisualVectorShapeData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/).                    |
| VisualVectorShapeData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/).              |
| VisualVectorShapeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/). |

## Properties

| Name                     | Type                                             | Description |
| ------------------------ | ------------------------------------------------ | ----------- |
| errorTolerance           | number                                           |             |
| shader3d                 | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| drawOrderIndex           | number                                           |             |
| tessellationTriangleSize | number                                           |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
