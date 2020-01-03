---
title: VecSplitterEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VecSplitterEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| VecSplitterEntityData(VecSplitterEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VecSplitterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VecSplitterEntityData](/vext/ref/fb/vecsplitterentitydata/).                            |
| VecSplitterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VecSplitterEntityData](/vext/ref/fb/vecsplitterentitydata/).                    |
| VecSplitterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VecSplitterEntityData](/vext/ref/fb/vecsplitterentitydata/).              |
| VecSplitterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VecSplitterEntityData](/vext/ref/fb/vecsplitterentitydata/). |

## Properties

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| vec3  | [Vec3](/vext/ref/shared/class/vec3) |             |
| vec4  | [Vec4](/vext/ref/shared/class/vec4) |             |
| realm | [Realm](/vext/ref/fb/realm/)                    |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VecSplitterEntityData](/vext/ref/fb/vecsplitterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VecSplitterEntityData](/vext/ref/fb/vecsplitterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
