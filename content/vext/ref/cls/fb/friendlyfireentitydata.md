---
title: FriendlyFireEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| FriendlyFireEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| FriendlyFireEntityData(FriendlyFireEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| FriendlyFireEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [FriendlyFireEntityData](FriendlyFireEntityData).                            |
| FriendlyFireEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FriendlyFireEntityData](FriendlyFireEntityData).                    |
| FriendlyFireEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FriendlyFireEntityData](FriendlyFireEntityData).              |
| FriendlyFireEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FriendlyFireEntityData](FriendlyFireEntityData). |

## Properties

| Name                         | Type                 | Description |
| ---------------------------- | -------------------- | ----------- |
| teams                        | [TeamId](TeamId)\[\] |             |
| enemyCommitmentAllocation    | number               |             |
| friendlyCommitmentAllocation | number               |             |
| maxCommitment                | number               |             |
| failureThreshold             | number               |             |
| decayRate                    | number               |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FriendlyFireEntityData](FriendlyFireEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FriendlyFireEntityData](FriendlyFireEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
