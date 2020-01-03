---
title: SoundStateEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SoundStateEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| SoundStateEntityData(SoundStateEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SoundStateEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SoundStateEntityData](SoundStateEntityData).                            |
| SoundStateEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoundStateEntityData](SoundStateEntityData).                    |
| SoundStateEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoundStateEntityData](SoundStateEntityData).              |
| SoundStateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundStateEntityData](SoundStateEntityData). |

## Properties

| Name       | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| soundState | [SoundState](SoundState) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundStateEntityData](SoundStateEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundStateEntityData](SoundStateEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
