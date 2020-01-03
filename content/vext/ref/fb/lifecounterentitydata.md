---
title: LifeCounterEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| LifeCounterEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| LifeCounterEntityData(LifeCounterEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| LifeCounterEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata/).                    |
| LifeCounterEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata/).              |
| LifeCounterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata/).                            |
| LifeCounterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata/).                    |
| LifeCounterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata/).              |
| LifeCounterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata/). |

## Properties

| Name                      | Type             | Description |
| ------------------------- | ---------------- | ----------- |
| startingLifeCount         | number           |             |
| displayTime               | number           |             |
| teamId                    | [TeamId](/vext/ref/fb/teamid/) |             |
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
| [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
