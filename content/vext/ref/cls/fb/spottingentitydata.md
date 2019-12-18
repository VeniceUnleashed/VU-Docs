---
title: SpottingEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SpottingEntityData()                                                          | Create a new instance of this container type.                                                                               |
| SpottingEntityData(SpottingEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SpottingEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SpottingEntityData](SpottingEntityData).                            |
| SpottingEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SpottingEntityData](SpottingEntityData).                    |
| SpottingEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SpottingEntityData](SpottingEntityData).              |
| SpottingEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpottingEntityData](SpottingEntityData). |

## Properties

| Name       | Type             | Description |
| ---------- | ---------------- | ----------- |
| realm      | [Realm](Realm)   |             |
| teamToSpot | [TeamId](TeamId) |             |
| enabled    | bool             |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SpottingEntityData](SpottingEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpottingEntityData](SpottingEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
