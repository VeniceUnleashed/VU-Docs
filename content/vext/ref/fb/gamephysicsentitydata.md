---
title: GamePhysicsEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| GamePhysicsEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| GamePhysicsEntityData(GamePhysicsEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| GamePhysicsEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [GamePhysicsEntityData](GamePhysicsEntityData).                    |
| GamePhysicsEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [GamePhysicsEntityData](GamePhysicsEntityData).              |
| GamePhysicsEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [GamePhysicsEntityData](GamePhysicsEntityData).                            |
| GamePhysicsEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [GamePhysicsEntityData](GamePhysicsEntityData).                    |
| GamePhysicsEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [GamePhysicsEntityData](GamePhysicsEntityData).              |
| GamePhysicsEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GamePhysicsEntityData](GamePhysicsEntityData). |

## Properties

| Name        | Type                                   | Description |
| ----------- | -------------------------------------- | ----------- |
| physicsData | [PhysicsEntityData](PhysicsEntityData) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [GamePhysicsEntityData](GamePhysicsEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GamePhysicsEntityData](GamePhysicsEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
