---
title: AABBData
---
### Base Classes

[BaseShapeData](BaseShapeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                         | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| AABBData()                                                          | Create a new instance of this container type.                                                           |
| AABBData(AABBData other)                                            | Create a reference copy of an instance of the same type.                                                |
| AABBData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [AABBData](AABBData).                      |
| AABBData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AABBData](AABBData).                    |
| AABBData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AABBData](AABBData).              |
| AABBData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AABBData](AABBData). |

## Properties

| Name        | Type                              | Description |
| ----------- | --------------------------------- | ----------- |
| position    | [Vec3](/vext/ref/shared/class/vec3) |             |
| halfExtents | [Vec3](/vext/ref/shared/class/vec3) |             |

## Methods

| Type                 | Name            | Parameters                                     |
| -------------------- | --------------- | ---------------------------------------------- |
| [AABBData](AABBData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AABBData](AABBData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
