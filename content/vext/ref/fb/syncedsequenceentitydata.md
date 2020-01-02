---
title: SyncedSequenceEntityData
---
### Base Classes

[SequenceEntityData](SequenceEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SyncedSequenceEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| SyncedSequenceEntityData(SyncedSequenceEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SyncedSequenceEntityData([SequenceEntityData](SequenceEntityData) other)            | Upcast an instance of type [SequenceEntityData](SequenceEntityData) to [SyncedSequenceEntityData](SyncedSequenceEntityData).            |
| SyncedSequenceEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SyncedSequenceEntityData](SyncedSequenceEntityData).                            |
| SyncedSequenceEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SyncedSequenceEntityData](SyncedSequenceEntityData).                    |
| SyncedSequenceEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SyncedSequenceEntityData](SyncedSequenceEntityData).              |
| SyncedSequenceEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SyncedSequenceEntityData](SyncedSequenceEntityData). |

## Properties

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| interpolateTime | bool |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SyncedSequenceEntityData](SyncedSequenceEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SyncedSequenceEntityData](SyncedSequenceEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
