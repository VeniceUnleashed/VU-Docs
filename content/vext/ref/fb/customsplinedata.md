---
title: CustomSplineData
---
### Base Classes

[VectorShapeData](/vext/ref/fb/vectorshapedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| CustomSplineData()                                                          | Create a new instance of this container type.                                                                           |
| CustomSplineData(CustomSplineData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| CustomSplineData([VectorShapeData](/vext/ref/fb/vectorshapedata/) other)                  | Upcast an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata/) to [CustomSplineData](/vext/ref/fb/customsplinedata/).                  |
| CustomSplineData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [CustomSplineData](/vext/ref/fb/customsplinedata/).                      |
| CustomSplineData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CustomSplineData](/vext/ref/fb/customsplinedata/).                    |
| CustomSplineData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CustomSplineData](/vext/ref/fb/customsplinedata/).              |
| CustomSplineData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomSplineData](/vext/ref/fb/customsplinedata/). |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [CustomSplineData](/vext/ref/fb/customsplinedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomSplineData](/vext/ref/fb/customsplinedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
