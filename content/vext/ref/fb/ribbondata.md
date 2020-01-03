---
title: RibbonData
---
### Base Classes

[VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| RibbonData()                                                          | Create a new instance of this container type.                                                               |
| RibbonData(RibbonData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| RibbonData([VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/) other)      | Upcast an instance of type [VisualVectorShapeData](/vext/ref/fb/visualvectorshapedata/) to [RibbonData](/vext/ref/fb/ribbondata/).      |
| RibbonData([VectorShapeData](/vext/ref/fb/vectorshapedata/) other)                  | Upcast an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata/) to [RibbonData](/vext/ref/fb/ribbondata/).                  |
| RibbonData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [RibbonData](/vext/ref/fb/ribbondata/).                      |
| RibbonData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RibbonData](/vext/ref/fb/ribbondata/).                    |
| RibbonData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RibbonData](/vext/ref/fb/ribbondata/).              |
| RibbonData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RibbonData](/vext/ref/fb/ribbondata/). |

## Properties

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| ribbonPoints | [RibbonPointData](/vext/ref/fb/ribbonpointdata/)\[\] |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [RibbonData](/vext/ref/fb/ribbondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RibbonData](/vext/ref/fb/ribbondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
