---
title: CharacterEntityData (Frostbite Container)
---
### Base Classes

[ControllableEntityData](ControllableEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CharacterEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| CharacterEntityData(CharacterEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CharacterEntityData([ControllableEntityData](ControllableEntityData) other)    | Upcast an instance of type [ControllableEntityData](ControllableEntityData) to [CharacterEntityData](CharacterEntityData).    |
| CharacterEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [CharacterEntityData](CharacterEntityData).      |
| CharacterEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [CharacterEntityData](CharacterEntityData).                    |
| CharacterEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [CharacterEntityData](CharacterEntityData).              |
| CharacterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CharacterEntityData](CharacterEntityData).                            |
| CharacterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CharacterEntityData](CharacterEntityData).                    |
| CharacterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CharacterEntityData](CharacterEntityData).              |
| CharacterEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CharacterEntityData](CharacterEntityData). |

## Properties

| Name                    | Type                               | Description |
| ----------------------- | ---------------------------------- | ----------- |
| defaultViewMode         | [PersonViewMode](PersonViewMode)   |             |
| playerSpawnType         | [PlayerSpawnType](PlayerSpawnType) |             |
| characterLightingEnable | bool                               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterEntityData](CharacterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CharacterEntityData](CharacterEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
