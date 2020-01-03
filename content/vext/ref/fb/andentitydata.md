---
title: AndEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AndEntityData()                                                          | Create a new instance of this container type.                                                                     |
| AndEntityData(AndEntityData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| AndEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AndEntityData](AndEntityData).                            |
| AndEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AndEntityData](AndEntityData).                    |
| AndEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AndEntityData](AndEntityData).              |
| AndEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AndEntityData](AndEntityData). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| realm | [Realm](Realm) |             |
| in1   | bool           |             |
| in2   | bool           |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [AndEntityData](AndEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AndEntityData](AndEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
