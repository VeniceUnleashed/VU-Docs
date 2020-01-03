---
title: Vec3EntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Vec3EntityData()                                                          | Create a new instance of this container type.                                                                       |
| Vec3EntityData(Vec3EntityData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| Vec3EntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [Vec3EntityData](/vext/ref/fb/vec3entitydata/).                            |
| Vec3EntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [Vec3EntityData](/vext/ref/fb/vec3entitydata/).                    |
| Vec3EntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [Vec3EntityData](/vext/ref/fb/vec3entitydata/).              |
| Vec3EntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Vec3EntityData](/vext/ref/fb/vec3entitydata/). |

## Properties

| Name         | Type                              | Description |
| ------------ | --------------------------------- | ----------- |
| defaultValue | [Vec3](/vext/ref/shared/class/vec3) |             |
| realm        | [Realm](/vext/ref/fb/realm/)                    |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [Vec3EntityData](/vext/ref/fb/vec3entitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Vec3EntityData](/vext/ref/fb/vec3entitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
