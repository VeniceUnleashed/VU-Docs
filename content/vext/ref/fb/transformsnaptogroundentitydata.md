---
title: TransformSnapToGroundEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformSnapToGroundEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| TransformSnapToGroundEntityData(TransformSnapToGroundEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| TransformSnapToGroundEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TransformSnapToGroundEntityData](TransformSnapToGroundEntityData).                            |
| TransformSnapToGroundEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TransformSnapToGroundEntityData](TransformSnapToGroundEntityData).                    |
| TransformSnapToGroundEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TransformSnapToGroundEntityData](TransformSnapToGroundEntityData).              |
| TransformSnapToGroundEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformSnapToGroundEntityData](TransformSnapToGroundEntityData). |

## Properties

| Name                  | Type                                                    | Description |
| --------------------- | ------------------------------------------------------- | ----------- |
| inValue               | [LinearTransform](/vext/ref/shared/class/LinearTransform) |             |
| realm                 | [Realm](Realm)                                          |             |
| distanceToGround      | number                                                  |             |
| rayCastLength         | number                                                  |             |
| rayCastUpOffset       | number                                                  |             |
| alignWithGroundNormal | bool                                                    |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TransformSnapToGroundEntityData](TransformSnapToGroundEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformSnapToGroundEntityData](TransformSnapToGroundEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
