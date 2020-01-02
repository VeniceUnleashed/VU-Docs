---
title: EventGateEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EventGateEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| EventGateEntityData(EventGateEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EventGateEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EventGateEntityData](EventGateEntityData).                            |
| EventGateEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EventGateEntityData](EventGateEntityData).                    |
| EventGateEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EventGateEntityData](EventGateEntityData).              |
| EventGateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventGateEntityData](EventGateEntityData). |

## Properties

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| realm   | [Realm](Realm) |             |
| default | bool           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EventGateEntityData](EventGateEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventGateEntityData](EventGateEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
