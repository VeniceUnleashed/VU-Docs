---
title: SyncedIntEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| SyncedIntEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| SyncedIntEntityData(SyncedIntEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| SyncedIntEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SyncedIntEntityData](SyncedIntEntityData).                            |
| SyncedIntEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SyncedIntEntityData](SyncedIntEntityData).                    |
| SyncedIntEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SyncedIntEntityData](SyncedIntEntityData).              |
| SyncedIntEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SyncedIntEntityData](SyncedIntEntityData). |

## Properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| inValue | number |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [SyncedIntEntityData](SyncedIntEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SyncedIntEntityData](SyncedIntEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
