---
title: IntEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| IntEntityData()                                                          | Create a new instance of this container type.                                                                     |
| IntEntityData(IntEntityData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| IntEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [IntEntityData](IntEntityData).                            |
| IntEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [IntEntityData](IntEntityData).                    |
| IntEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [IntEntityData](IntEntityData).              |
| IntEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [IntEntityData](IntEntityData). |

## Properties

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| realm        | [Realm](Realm) |             |
| defaultValue | number         |             |
| incDecValue  | number         |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [IntEntityData](IntEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [IntEntityData](IntEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
