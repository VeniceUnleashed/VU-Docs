---
title: RandomFloatEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| RandomFloatEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| RandomFloatEntityData(RandomFloatEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| RandomFloatEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [RandomFloatEntityData](RandomFloatEntityData).                            |
| RandomFloatEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RandomFloatEntityData](RandomFloatEntityData).                    |
| RandomFloatEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RandomFloatEntityData](RandomFloatEntityData).              |
| RandomFloatEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RandomFloatEntityData](RandomFloatEntityData). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| realm | [Realm](Realm) |             |
| min   | number         |             |
| max   | number         |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [RandomFloatEntityData](RandomFloatEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RandomFloatEntityData](RandomFloatEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
