---
title: GameSplineData
---
### Base Classes

[CustomSplineData](/vext/ref/fb/customsplinedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| GameSplineData()                                                          | Create a new instance of this container type.                                                                       |
| GameSplineData(GameSplineData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| GameSplineData([CustomSplineData](/vext/ref/fb/customsplinedata/) other)                | Upcast an instance of type [CustomSplineData](/vext/ref/fb/customsplinedata/) to [GameSplineData](/vext/ref/fb/gamesplinedata/).                |
| GameSplineData([VectorShapeData](/vext/ref/fb/vectorshapedata/) other)                  | Upcast an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata/) to [GameSplineData](/vext/ref/fb/gamesplinedata/).                  |
| GameSplineData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [GameSplineData](/vext/ref/fb/gamesplinedata/).                      |
| GameSplineData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [GameSplineData](/vext/ref/fb/gamesplinedata/).                    |
| GameSplineData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [GameSplineData](/vext/ref/fb/gamesplinedata/).              |
| GameSplineData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameSplineData](/vext/ref/fb/gamesplinedata/). |

## Properties

| Name       | Type                             | Description |
| ---------- | -------------------------------- | ----------- |
| splineType | [GameSplineType](/vext/ref/fb/gamesplinetype/) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [GameSplineData](/vext/ref/fb/gamesplinedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameSplineData](/vext/ref/fb/gamesplinedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
