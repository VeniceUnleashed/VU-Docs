---
title: SyncedFloatEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SyncedFloatEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| SyncedFloatEntityData(SyncedFloatEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SyncedFloatEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SyncedFloatEntityData](SyncedFloatEntityData).                            |
| SyncedFloatEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SyncedFloatEntityData](SyncedFloatEntityData).                    |
| SyncedFloatEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SyncedFloatEntityData](SyncedFloatEntityData).              |
| SyncedFloatEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SyncedFloatEntityData](SyncedFloatEntityData). |

## Properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| inValue | number |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SyncedFloatEntityData](SyncedFloatEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SyncedFloatEntityData](SyncedFloatEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
