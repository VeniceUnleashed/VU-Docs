---
title: OBBData
---
### Base Classes

[BaseShapeData](/vext/ref/fb/baseshapedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                        | Description                                                                                           |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| OBBData()                                                          | Create a new instance of this container type.                                                         |
| OBBData(OBBData other)                                             | Create a reference copy of an instance of the same type.                                              |
| OBBData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [OBBData](/vext/ref/fb/obbdata/).                      |
| OBBData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [OBBData](/vext/ref/fb/obbdata/).                    |
| OBBData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [OBBData](/vext/ref/fb/obbdata/).              |
| OBBData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OBBData](/vext/ref/fb/obbdata/). |

## Properties

| Name        | Type                                                    | Description |
| ----------- | ------------------------------------------------------- | ----------- |
| transform   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| halfExtents | [Vec3](/vext/ref/shared/class/vec3)                       |             |

## Methods

| Type               | Name            | Parameters                                     |
| ------------------ | --------------- | ---------------------------------------------- |
| [OBBData](/vext/ref/fb/obbdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OBBData](/vext/ref/fb/obbdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
