---
title: DebugTextEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| DebugTextEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| DebugTextEntityData(DebugTextEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| DebugTextEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata/).              |
| DebugTextEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata/).                            |
| DebugTextEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata/).                    |
| DebugTextEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata/).              |
| DebugTextEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugTextEntityData](/vext/ref/fb/debugtextentitydata/). |

## Properties

| Name              | Type                              | Description |
| ----------------- | --------------------------------- | ----------- |
| textColor         | [Vec3](/vext/ref/shared/class/vec3) |             |
| debugText         | string                            |             |
| realm             | [Realm](/vext/ref/fb/realm/)                    |             |
| scale             | number                            |             |
| visible           | bool                              |             |
| centered          | bool                              |             |
| depthTest         | bool                              |             |
| scaleWithDistance | bool                              |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [DebugTextEntityData](/vext/ref/fb/debugtextentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebugTextEntityData](/vext/ref/fb/debugtextentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
