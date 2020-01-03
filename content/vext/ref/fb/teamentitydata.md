---
title: TeamEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| TeamEntityData()                                                          | Create a new instance of this container type.                                                                       |
| TeamEntityData(TeamEntityData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| TeamEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [TeamEntityData](/vext/ref/fb/teamentitydata/).                    |
| TeamEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [TeamEntityData](/vext/ref/fb/teamentitydata/).              |
| TeamEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TeamEntityData](/vext/ref/fb/teamentitydata/).                            |
| TeamEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TeamEntityData](/vext/ref/fb/teamentitydata/).                    |
| TeamEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TeamEntityData](/vext/ref/fb/teamentitydata/).              |
| TeamEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TeamEntityData](/vext/ref/fb/teamentitydata/). |

## Properties

| Name | Type                 | Description |
| ---- | -------------------- | ----------- |
| team | [TeamData](/vext/ref/fb/teamdata/) |             |
| id   | [TeamId](/vext/ref/fb/teamid/)     |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [TeamEntityData](/vext/ref/fb/teamentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TeamEntityData](/vext/ref/fb/teamentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
