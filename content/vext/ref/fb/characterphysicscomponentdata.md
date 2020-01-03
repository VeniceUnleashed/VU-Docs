---
title: CharacterPhysicsComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterPhysicsComponentData()                                                          | Create a new instance of this container type.                                                                                                     |
| CharacterPhysicsComponentData(CharacterPhysicsComponentData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| CharacterPhysicsComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [CharacterPhysicsComponentData](CharacterPhysicsComponentData).                      |
| CharacterPhysicsComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CharacterPhysicsComponentData](CharacterPhysicsComponentData).                    |
| CharacterPhysicsComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CharacterPhysicsComponentData](CharacterPhysicsComponentData).              |
| CharacterPhysicsComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterPhysicsComponentData](CharacterPhysicsComponentData). |

## Properties

| Name                   | Type                                         | Description |
| ---------------------- | -------------------------------------------- | ----------- |
| characterPhysics       | [CharacterPhysicsData](CharacterPhysicsData) |             |
| enableCollisionOnSpawn | bool                                         |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterPhysicsComponentData](CharacterPhysicsComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterPhysicsComponentData](CharacterPhysicsComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
