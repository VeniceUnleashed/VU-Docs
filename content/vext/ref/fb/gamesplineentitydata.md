---
title: GameSplineEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| GameSplineEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| GameSplineEntityData(GameSplineEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| GameSplineEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [GameSplineEntityData](GameSplineEntityData).                    |
| GameSplineEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [GameSplineEntityData](GameSplineEntityData).              |
| GameSplineEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [GameSplineEntityData](GameSplineEntityData).                            |
| GameSplineEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [GameSplineEntityData](GameSplineEntityData).                    |
| GameSplineEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [GameSplineEntityData](GameSplineEntityData).              |
| GameSplineEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameSplineEntityData](GameSplineEntityData). |

## Properties

| Name        | Type                                  | Description |
| ----------- | ------------------------------------- | ----------- |
| splineType  | [GameSplineType](GameSplineType)      |             |
| localPoints | [Vec3](/vext/ref/shared/class/vec3)\[\] |             |
| normals     | [Vec3](/vext/ref/shared/class/vec3)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [GameSplineEntityData](GameSplineEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameSplineEntityData](GameSplineEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
