---
title: SlowMotionEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SlowMotionEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| SlowMotionEntityData(SlowMotionEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SlowMotionEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SlowMotionEntityData](SlowMotionEntityData).                            |
| SlowMotionEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SlowMotionEntityData](SlowMotionEntityData).                    |
| SlowMotionEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SlowMotionEntityData](SlowMotionEntityData).              |
| SlowMotionEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SlowMotionEntityData](SlowMotionEntityData). |

## Properties

| Name                    | Type           | Description |
| ----------------------- | -------------- | ----------- |
| realm                   | [Realm](Realm) |             |
| timeScale               | number         |             |
| scaleDownTransitionTime | number         |             |
| scaleUpTransitionTime   | number         |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SlowMotionEntityData](SlowMotionEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SlowMotionEntityData](SlowMotionEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
