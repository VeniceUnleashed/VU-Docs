---
title: KillCounterEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| KillCounterEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| KillCounterEntityData(KillCounterEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| KillCounterEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata/).                    |
| KillCounterEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata/).              |
| KillCounterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata/).                            |
| KillCounterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata/).                    |
| KillCounterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata/).              |
| KillCounterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KillCounterEntityData](/vext/ref/fb/killcounterentitydata/). |

## Properties

| Name              | Type                     | Description |
| ----------------- | ------------------------ | ----------- |
| teamKillWeight    | [KillWeight](/vext/ref/fb/killweight/) |             |
| teamId            | [TeamId](/vext/ref/fb/teamid/)         |             |
| neutralTeamWeight | [KillWeight](/vext/ref/fb/killweight/) |             |
| enemyWeight       | number                   |             |
| maxKillCount      | number                   |             |
| ignoreAI          | bool                     |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [KillCounterEntityData](/vext/ref/fb/killcounterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KillCounterEntityData](/vext/ref/fb/killcounterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
