---
title: DebugTextEntityData (Frostbite Container)
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| DebugTextEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| DebugTextEntityData(DebugTextEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| DebugTextEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DebugTextEntityData](DebugTextEntityData).              |
| DebugTextEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DebugTextEntityData](DebugTextEntityData).                            |
| DebugTextEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DebugTextEntityData](DebugTextEntityData).                    |
| DebugTextEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DebugTextEntityData](DebugTextEntityData).              |
| DebugTextEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DebugTextEntityData](DebugTextEntityData). |

## Properties

| Name              | Type                              | Description |
| ----------------- | --------------------------------- | ----------- |
| textColor         | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| debugText         | string                            |             |
| realm             | [Realm](Realm)                    |             |
| scale             | number                            |             |
| visible           | bool                              |             |
| centered          | bool                              |             |
| depthTest         | bool                              |             |
| scaleWithDistance | bool                              |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [DebugTextEntityData](DebugTextEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DebugTextEntityData](DebugTextEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
