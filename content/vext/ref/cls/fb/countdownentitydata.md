---
title: CountDownEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CountDownEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| CountDownEntityData(CountDownEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CountDownEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CountDownEntityData](CountDownEntityData).                            |
| CountDownEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CountDownEntityData](CountDownEntityData).                    |
| CountDownEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CountDownEntityData](CountDownEntityData).              |
| CountDownEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CountDownEntityData](CountDownEntityData). |

## Properties

| Name       | Type           | Description |
| ---------- | -------------- | ----------- |
| startValue | number         |             |
| realm      | [Realm](Realm) |             |
| runOnce    | bool           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [CountDownEntityData](CountDownEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CountDownEntityData](CountDownEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
