---
title: VecSplitterEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VecSplitterEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| VecSplitterEntityData(VecSplitterEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VecSplitterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [VecSplitterEntityData](VecSplitterEntityData).                            |
| VecSplitterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VecSplitterEntityData](VecSplitterEntityData).                    |
| VecSplitterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VecSplitterEntityData](VecSplitterEntityData).              |
| VecSplitterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VecSplitterEntityData](VecSplitterEntityData). |

## Properties

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| vec3  | [Vec3](/vext/ref/shared/class/Vec3) |             |
| vec4  | [Vec4](/vext/ref/shared/class/Vec4) |             |
| realm | [Realm](Realm)                    |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VecSplitterEntityData](VecSplitterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VecSplitterEntityData](VecSplitterEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
