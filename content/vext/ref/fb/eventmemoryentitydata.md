---
title: EventMemoryEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| EventMemoryEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| EventMemoryEntityData(EventMemoryEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| EventMemoryEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [EventMemoryEntityData](EventMemoryEntityData).                    |
| EventMemoryEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [EventMemoryEntityData](EventMemoryEntityData).              |
| EventMemoryEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EventMemoryEntityData](EventMemoryEntityData).                            |
| EventMemoryEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EventMemoryEntityData](EventMemoryEntityData).                    |
| EventMemoryEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EventMemoryEntityData](EventMemoryEntityData).              |
| EventMemoryEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventMemoryEntityData](EventMemoryEntityData). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| realm | [Realm](Realm) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [EventMemoryEntityData](EventMemoryEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventMemoryEntityData](EventMemoryEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
