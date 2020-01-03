---
title: GameSoundEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| GameSoundEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| GameSoundEntityData(GameSoundEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| GameSoundEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [GameSoundEntityData](GameSoundEntityData).                    |
| GameSoundEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [GameSoundEntityData](GameSoundEntityData).              |
| GameSoundEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [GameSoundEntityData](GameSoundEntityData).                            |
| GameSoundEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [GameSoundEntityData](GameSoundEntityData).                    |
| GameSoundEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [GameSoundEntityData](GameSoundEntityData).              |
| GameSoundEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameSoundEntityData](GameSoundEntityData). |

## Properties

| Name           | Type                     | Description |
| -------------- | ------------------------ | ----------- |
| sound          | [SoundAsset](SoundAsset) |             |
| playOnCreation | bool                     |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [GameSoundEntityData](GameSoundEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameSoundEntityData](GameSoundEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
