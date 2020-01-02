---
title: SoundEffectEntityData
---
### Base Classes

[EffectEntityData](EffectEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SoundEffectEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| SoundEffectEntityData(SoundEffectEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SoundEffectEntityData([EffectEntityData](EffectEntityData) other)                | Upcast an instance of type [EffectEntityData](EffectEntityData) to [SoundEffectEntityData](SoundEffectEntityData).                |
| SoundEffectEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [SoundEffectEntityData](SoundEffectEntityData).              |
| SoundEffectEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SoundEffectEntityData](SoundEffectEntityData).                            |
| SoundEffectEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoundEffectEntityData](SoundEffectEntityData).                    |
| SoundEffectEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoundEffectEntityData](SoundEffectEntityData).              |
| SoundEffectEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundEffectEntityData](SoundEffectEntityData). |

## Properties

| Name  | Type                     | Description |
| ----- | ------------------------ | ----------- |
| sound | [SoundAsset](SoundAsset) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundEffectEntityData](SoundEffectEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundEffectEntityData](SoundEffectEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
