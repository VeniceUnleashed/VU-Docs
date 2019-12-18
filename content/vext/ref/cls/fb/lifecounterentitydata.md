---
title: LifeCounterEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| LifeCounterEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| LifeCounterEntityData(LifeCounterEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| LifeCounterEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [LifeCounterEntityData](LifeCounterEntityData).                    |
| LifeCounterEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [LifeCounterEntityData](LifeCounterEntityData).              |
| LifeCounterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [LifeCounterEntityData](LifeCounterEntityData).                            |
| LifeCounterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LifeCounterEntityData](LifeCounterEntityData).                    |
| LifeCounterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LifeCounterEntityData](LifeCounterEntityData).              |
| LifeCounterEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LifeCounterEntityData](LifeCounterEntityData). |

## Properties

| Name                      | Type             | Description |
| ------------------------- | ---------------- | ----------- |
| startingLifeCount         | number           |             |
| displayTime               | number           |             |
| teamId                    | [TeamId](TeamId) |             |
| lifeTresholdValues        | number\[\]       |             |
| uiShowCountLowerThreshold | number           |             |
| uiShowCountUpperThreshold | number           |             |
| baseCount                 | number           |             |
| reinforceTable            | number\[\]       |             |
| reinforceThreshold        | number           |             |
| reinforceMessageSid       | string           |             |
| fightHarderTreshold       | number           |             |
| defensiveKillRadius       | number           |             |
| fallbackTime              | number           |             |
| fightHarderMessageSid     | string           |             |
| attacker                  | bool             |             |
| setBestSquadSpawner       | bool             |             |
| simpleReinforce           | bool             |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [LifeCounterEntityData](LifeCounterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LifeCounterEntityData](LifeCounterEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
