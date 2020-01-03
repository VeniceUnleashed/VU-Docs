---
title: RoadData
---
### Base Classes

[RibbonData](/vext/ref/fb/ribbondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                         | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| RoadData()                                                          | Create a new instance of this container type.                                                           |
| RoadData(RoadData other)                                            | Create a reference copy of an instance of the same type.                                                |
| RoadData([RibbonData](/vext/ref/fb/ribbondata/) other)                            | Upcast an instance of type [RibbonData](/vext/ref/fb/ribbondata/) to [RoadData](/vext/ref/fb/roaddata/).                            |
| RoadData([VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/) other)      | Upcast an instance of type [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/) to [RoadData](/vext/ref/fb/roaddata/).      |
| RoadData([VectorShapeData](/vext/ref/fb/vectorshapedata/) other)                  | Upcast an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata/) to [RoadData](/vext/ref/fb/roaddata/).                  |
| RoadData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [RoadData](/vext/ref/fb/roaddata/).                      |
| RoadData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RoadData](/vext/ref/fb/roaddata/).                    |
| RoadData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RoadData](/vext/ref/fb/roaddata/).              |
| RoadData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RoadData](/vext/ref/fb/roaddata/). |

## Properties

| Name           | Type                                             | Description |
| -------------- | ------------------------------------------------ | ----------- |
| shader2d       | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| shader3dZOnly  | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| uvTileFactor   | number                                           |             |
| stickToTerrain | bool                                             |             |

## Methods

| Type                 | Name            | Parameters                                     |
| -------------------- | --------------- | ---------------------------------------------- |
| [RoadData](/vext/ref/fb/roaddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RoadData](/vext/ref/fb/roaddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
