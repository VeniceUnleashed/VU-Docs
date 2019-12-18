---
title: SyncAnimationsEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SyncAnimationsEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| SyncAnimationsEntityData(SyncAnimationsEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SyncAnimationsEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SyncAnimationsEntityData](SyncAnimationsEntityData).                            |
| SyncAnimationsEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SyncAnimationsEntityData](SyncAnimationsEntityData).                    |
| SyncAnimationsEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SyncAnimationsEntityData](SyncAnimationsEntityData).              |
| SyncAnimationsEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SyncAnimationsEntityData](SyncAnimationsEntityData). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| externalTime      | number |             |
| nearEndEventTime  | number |             |
| startServerPaused | bool   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SyncAnimationsEntityData](SyncAnimationsEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SyncAnimationsEntityData](SyncAnimationsEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
