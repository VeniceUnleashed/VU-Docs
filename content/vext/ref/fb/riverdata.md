---
title: RiverData
---
### Base Classes

[RibbonData](/vext/ref/fb/ribbondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| RiverData()                                                          | Create a new instance of this container type.                                                             |
| RiverData(RiverData other)                                           | Create a reference copy of an instance of the same type.                                                  |
| RiverData([RibbonData](/vext/ref/fb/ribbondata/) other)                            | Upcast an instance of type [RibbonData](/vext/ref/fb/ribbondata/) to [RiverData](/vext/ref/fb/riverdata/).                            |
| RiverData([VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/) other)      | Upcast an instance of type [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/) to [RiverData](/vext/ref/fb/riverdata/).      |
| RiverData([VectorShapeData](/vext/ref/fb/vectorshapedata/) other)                  | Upcast an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata/) to [RiverData](/vext/ref/fb/riverdata/).                  |
| RiverData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [RiverData](/vext/ref/fb/riverdata/).                      |
| RiverData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RiverData](/vext/ref/fb/riverdata/).                    |
| RiverData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RiverData](/vext/ref/fb/riverdata/).              |
| RiverData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RiverData](/vext/ref/fb/riverdata/). |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [RiverData](/vext/ref/fb/riverdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RiverData](/vext/ref/fb/riverdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
