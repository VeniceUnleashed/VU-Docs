---
title: KillCounterEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| KillCounterEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| KillCounterEntityData(KillCounterEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| KillCounterEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [KillCounterEntityData](KillCounterEntityData).                    |
| KillCounterEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [KillCounterEntityData](KillCounterEntityData).              |
| KillCounterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [KillCounterEntityData](KillCounterEntityData).                            |
| KillCounterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [KillCounterEntityData](KillCounterEntityData).                    |
| KillCounterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [KillCounterEntityData](KillCounterEntityData).              |
| KillCounterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KillCounterEntityData](KillCounterEntityData). |

## Properties

| Name              | Type                     | Description |
| ----------------- | ------------------------ | ----------- |
| teamKillWeight    | [KillWeight](KillWeight) |             |
| teamId            | [TeamId](TeamId)         |             |
| neutralTeamWeight | [KillWeight](KillWeight) |             |
| enemyWeight       | number                   |             |
| maxKillCount      | number                   |             |
| ignoreAI          | bool                     |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [KillCounterEntityData](KillCounterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KillCounterEntityData](KillCounterEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
