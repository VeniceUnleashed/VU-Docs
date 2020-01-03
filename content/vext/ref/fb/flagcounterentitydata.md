---
title: FlagCounterEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| FlagCounterEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| FlagCounterEntityData(FlagCounterEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| FlagCounterEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [FlagCounterEntityData](FlagCounterEntityData).                    |
| FlagCounterEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [FlagCounterEntityData](FlagCounterEntityData).              |
| FlagCounterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [FlagCounterEntityData](FlagCounterEntityData).                            |
| FlagCounterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FlagCounterEntityData](FlagCounterEntityData).                    |
| FlagCounterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FlagCounterEntityData](FlagCounterEntityData).              |
| FlagCounterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FlagCounterEntityData](FlagCounterEntityData). |

## Properties

| Name               | Type             | Description |
| ------------------ | ---------------- | ----------- |
| teamId             | [TeamId](TeamId) |             |
| enemyFlagProgress  | number           |             |
| roundTime          | number           |             |
| objectiveFlagCount | number           |             |
| visibleInMinimap   | bool             |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [FlagCounterEntityData](FlagCounterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FlagCounterEntityData](FlagCounterEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
