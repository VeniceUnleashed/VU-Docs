---
title: DifficultyIndexEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DifficultyIndexEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| DifficultyIndexEntityData(DifficultyIndexEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| DifficultyIndexEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DifficultyIndexEntityData](DifficultyIndexEntityData).                            |
| DifficultyIndexEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DifficultyIndexEntityData](DifficultyIndexEntityData).                    |
| DifficultyIndexEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DifficultyIndexEntityData](DifficultyIndexEntityData).              |
| DifficultyIndexEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DifficultyIndexEntityData](DifficultyIndexEntityData). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| realm | [Realm](Realm) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DifficultyIndexEntityData](DifficultyIndexEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DifficultyIndexEntityData](DifficultyIndexEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
