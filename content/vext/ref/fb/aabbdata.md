---
title: AABBData
---
### Base Classes

[BaseShapeData](/vext/ref/fb/baseshapedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                         | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| AABBData()                                                          | Create a new instance of this container type.                                                           |
| AABBData(AABBData other)                                            | Create a reference copy of an instance of the same type.                                                |
| AABBData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [AABBData](/vext/ref/fb/aabbdata/).                      |
| AABBData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AABBData](/vext/ref/fb/aabbdata/).                    |
| AABBData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AABBData](/vext/ref/fb/aabbdata/).              |
| AABBData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AABBData](/vext/ref/fb/aabbdata/). |

## Properties

| Name        | Type                              | Description |
| ----------- | --------------------------------- | ----------- |
| position    | [Vec3](/vext/ref/shared/class/vec3) |             |
| halfExtents | [Vec3](/vext/ref/shared/class/vec3) |             |

## Methods

| Type                 | Name            | Parameters                                     |
| -------------------- | --------------- | ---------------------------------------------- |
| [AABBData](/vext/ref/fb/aabbdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AABBData](/vext/ref/fb/aabbdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
