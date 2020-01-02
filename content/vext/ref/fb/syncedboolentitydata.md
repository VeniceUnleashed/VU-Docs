---
title: SyncedBoolEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SyncedBoolEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| SyncedBoolEntityData(SyncedBoolEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SyncedBoolEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SyncedBoolEntityData](SyncedBoolEntityData).                            |
| SyncedBoolEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SyncedBoolEntityData](SyncedBoolEntityData).                    |
| SyncedBoolEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SyncedBoolEntityData](SyncedBoolEntityData).              |
| SyncedBoolEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SyncedBoolEntityData](SyncedBoolEntityData). |

## Properties

| Name    | Type | Description |
| ------- | ---- | ----------- |
| inValue | bool |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SyncedBoolEntityData](SyncedBoolEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SyncedBoolEntityData](SyncedBoolEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
