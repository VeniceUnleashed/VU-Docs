---
title: EventSwitchEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| EventSwitchEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| EventSwitchEntityData(EventSwitchEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| EventSwitchEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EventSwitchEntityData](EventSwitchEntityData).                            |
| EventSwitchEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EventSwitchEntityData](EventSwitchEntityData).                    |
| EventSwitchEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EventSwitchEntityData](EventSwitchEntityData).              |
| EventSwitchEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventSwitchEntityData](EventSwitchEntityData). |

## Properties

| Name          | Type           | Description |
| ------------- | -------------- | ----------- |
| realm         | [Realm](Realm) |             |
| outEvents     | number         |             |
| autoIncrement | bool           |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [EventSwitchEntityData](EventSwitchEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventSwitchEntityData](EventSwitchEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
