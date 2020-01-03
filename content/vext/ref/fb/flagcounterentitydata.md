---
title: FlagCounterEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| FlagCounterEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| FlagCounterEntityData(FlagCounterEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| FlagCounterEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata/).                    |
| FlagCounterEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata/).              |
| FlagCounterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata/).                            |
| FlagCounterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata/).                    |
| FlagCounterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata/).              |
| FlagCounterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata/). |

## Properties

| Name               | Type             | Description |
| ------------------ | ---------------- | ----------- |
| teamId             | [TeamId](/vext/ref/fb/teamid/) |             |
| enemyFlagProgress  | number           |             |
| roundTime          | number           |             |
| objectiveFlagCount | number           |             |
| visibleInMinimap   | bool             |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FlagCounterEntityData](/vext/ref/fb/flagcounterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
