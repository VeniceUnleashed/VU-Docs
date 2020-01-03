---
title: StopWatchEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| StopWatchEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| StopWatchEntityData(StopWatchEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| StopWatchEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [StopWatchEntityData](StopWatchEntityData).                            |
| StopWatchEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [StopWatchEntityData](StopWatchEntityData).                    |
| StopWatchEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [StopWatchEntityData](StopWatchEntityData).              |
| StopWatchEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StopWatchEntityData](StopWatchEntityData). |

## Properties

| Name          | Type                     | Description |
| ------------- | ------------------------ | ----------- |
| realm         | [Realm](Realm)           |             |
| updatePass    | [UpdatePass](UpdatePass) |             |
| multiplier    | number                   |             |
| triggerOnTime | number                   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [StopWatchEntityData](StopWatchEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StopWatchEntityData](StopWatchEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
