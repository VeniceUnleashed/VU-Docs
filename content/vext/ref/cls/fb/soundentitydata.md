---
title: SoundEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| SoundEntityData()                                                          | Create a new instance of this container type.                                                                         |
| SoundEntityData(SoundEntityData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| SoundEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SoundEntityData](SoundEntityData).                            |
| SoundEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoundEntityData](SoundEntityData).                    |
| SoundEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoundEntityData](SoundEntityData).              |
| SoundEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundEntityData](SoundEntityData). |

## Properties

| Name              | Type                                                    | Description |
| ----------------- | ------------------------------------------------------- | ----------- |
| transform         | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |
| sound             | [SoundAsset](SoundAsset)                                |             |
| obstructionHandle | number                                                  |             |
| playOnCreation    | bool                                                    |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [SoundEntityData](SoundEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundEntityData](SoundEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
