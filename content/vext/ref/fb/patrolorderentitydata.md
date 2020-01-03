---
title: PatrolOrderEntityData
---
### Base Classes

[BFOrderEntityData](/vext/ref/fb/bforderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| PatrolOrderEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| PatrolOrderEntityData(PatrolOrderEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| PatrolOrderEntityData([BFOrderEntityData](/vext/ref/fb/bforderentitydata/) other)              | Upcast an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata/).              |
| PatrolOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                  | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata/).                  |
| PatrolOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata/).                            |
| PatrolOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata/).                    |
| PatrolOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata/).              |
| PatrolOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata/). |

## Properties

| Name                                | Type                                 | Description |
| ----------------------------------- | ------------------------------------ | ----------- |
| typeOfRoute                         | [RouteType](/vext/ref/fb/routetype/)               |             |
| combatMode                          | [CombatPatrolMode](/vext/ref/fb/combatpatrolmode/) |             |
| startingWaypoint                    | [WaypointData](/vext/ref/fb/waypointdata/)         |             |
| startAtGeometricallyClosestWaypoint | bool                                 |             |
| usePathFinding                      | bool                                 |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
