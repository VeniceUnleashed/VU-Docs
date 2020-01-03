---
title: VectorShapeData
---
### Base Classes

[BaseShapeData](/vext/ref/fb/baseshapedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| VectorShapeData()                                                          | Create a new instance of this container type.                                                                         |
| VectorShapeData(VectorShapeData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| VectorShapeData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [VectorShapeData](/vext/ref/fb/vectorshapedata/).                      |
| VectorShapeData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VectorShapeData](/vext/ref/fb/vectorshapedata/).                    |
| VectorShapeData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VectorShapeData](/vext/ref/fb/vectorshapedata/).              |
| VectorShapeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VectorShapeData](/vext/ref/fb/vectorshapedata/). |

## Properties

| Name      | Type                                  | Description |
| --------- | ------------------------------------- | ----------- |
| points    | [Vec3](/vext/ref/shared/class/vec3)\[\] |             |
| normals   | [Vec3](/vext/ref/shared/class/vec3)\[\] |             |
| tension   | number                                |             |
| isClosed  | bool                                  |             |
| allowRoll | bool                                  |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [VectorShapeData](/vext/ref/fb/vectorshapedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VectorShapeData](/vext/ref/fb/vectorshapedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
