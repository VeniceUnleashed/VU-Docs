---
title: EventAndGateEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| EventAndGateEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| EventAndGateEntityData(EventAndGateEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| EventAndGateEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EventAndGateEntityData](EventAndGateEntityData).                            |
| EventAndGateEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EventAndGateEntityData](EventAndGateEntityData).                    |
| EventAndGateEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EventAndGateEntityData](EventAndGateEntityData).              |
| EventAndGateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventAndGateEntityData](EventAndGateEntityData). |

## Properties

| Name       | Type           | Description |
| ---------- | -------------- | ----------- |
| realm      | [Realm](Realm) |             |
| eventCount | number         |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [EventAndGateEntityData](EventAndGateEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventAndGateEntityData](EventAndGateEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
