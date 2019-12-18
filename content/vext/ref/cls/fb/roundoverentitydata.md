---
title: RoundOverEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| RoundOverEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| RoundOverEntityData(RoundOverEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| RoundOverEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [RoundOverEntityData](RoundOverEntityData).                            |
| RoundOverEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RoundOverEntityData](RoundOverEntityData).                    |
| RoundOverEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RoundOverEntityData](RoundOverEntityData).              |
| RoundOverEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RoundOverEntityData](RoundOverEntityData). |

## Properties

| Name | Type             | Description |
| ---- | ---------------- | ----------- |
| team | [TeamId](TeamId) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [RoundOverEntityData](RoundOverEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RoundOverEntityData](RoundOverEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
