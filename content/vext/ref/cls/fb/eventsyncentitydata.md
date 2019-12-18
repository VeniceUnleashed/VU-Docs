---
title: EventSyncEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EventSyncEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| EventSyncEntityData(EventSyncEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EventSyncEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EventSyncEntityData](EventSyncEntityData).                            |
| EventSyncEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EventSyncEntityData](EventSyncEntityData).                    |
| EventSyncEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EventSyncEntityData](EventSyncEntityData).              |
| EventSyncEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EventSyncEntityData](EventSyncEntityData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EventSyncEntityData](EventSyncEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EventSyncEntityData](EventSyncEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
