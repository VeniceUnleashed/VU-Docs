---
title: ClientPlayerInputPlaybackEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ClientPlayerInputPlaybackEntityData()                                                          | Create a new instance of this container type.                                                                                                                 |
| ClientPlayerInputPlaybackEntityData(ClientPlayerInputPlaybackEntityData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| ClientPlayerInputPlaybackEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ClientPlayerInputPlaybackEntityData](ClientPlayerInputPlaybackEntityData).                            |
| ClientPlayerInputPlaybackEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ClientPlayerInputPlaybackEntityData](ClientPlayerInputPlaybackEntityData).                    |
| ClientPlayerInputPlaybackEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ClientPlayerInputPlaybackEntityData](ClientPlayerInputPlaybackEntityData).              |
| ClientPlayerInputPlaybackEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ClientPlayerInputPlaybackEntityData](ClientPlayerInputPlaybackEntityData). |

## Properties

| Name     | Type           | Description |
| -------- | -------------- | ----------- |
| realm    | [Realm](Realm) |             |
| fileName | string         |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ClientPlayerInputPlaybackEntityData](ClientPlayerInputPlaybackEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ClientPlayerInputPlaybackEntityData](ClientPlayerInputPlaybackEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
