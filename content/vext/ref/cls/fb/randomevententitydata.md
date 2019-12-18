---
title: RandomEventEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| RandomEventEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| RandomEventEntityData(RandomEventEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| RandomEventEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [RandomEventEntityData](RandomEventEntityData).                            |
| RandomEventEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RandomEventEntityData](RandomEventEntityData).                    |
| RandomEventEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RandomEventEntityData](RandomEventEntityData).              |
| RandomEventEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RandomEventEntityData](RandomEventEntityData). |

## Properties

| Name               | Type           | Description |
| ------------------ | -------------- | ----------- |
| realm              | [Realm](Realm) |             |
| probability        | number         |             |
| randomizeFirstOnly | bool           |             |
| autoStart          | bool           |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [RandomEventEntityData](RandomEventEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RandomEventEntityData](RandomEventEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
