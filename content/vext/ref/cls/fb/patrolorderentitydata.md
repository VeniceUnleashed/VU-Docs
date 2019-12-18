---
title: PatrolOrderEntityData (Frostbite Container)
---
### Base Classes

[BFOrderEntityData](BFOrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| PatrolOrderEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| PatrolOrderEntityData(PatrolOrderEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| PatrolOrderEntityData([BFOrderEntityData](BFOrderEntityData) other)              | Upcast an instance of type [BFOrderEntityData](BFOrderEntityData) to [PatrolOrderEntityData](PatrolOrderEntityData).              |
| PatrolOrderEntityData([OrderEntityData](OrderEntityData) other)                  | Upcast an instance of type [OrderEntityData](OrderEntityData) to [PatrolOrderEntityData](PatrolOrderEntityData).                  |
| PatrolOrderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PatrolOrderEntityData](PatrolOrderEntityData).                            |
| PatrolOrderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PatrolOrderEntityData](PatrolOrderEntityData).                    |
| PatrolOrderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PatrolOrderEntityData](PatrolOrderEntityData).              |
| PatrolOrderEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PatrolOrderEntityData](PatrolOrderEntityData). |

## Properties

| Name                                | Type                                 | Description |
| ----------------------------------- | ------------------------------------ | ----------- |
| typeOfRoute                         | [RouteType](RouteType)               |             |
| combatMode                          | [CombatPatrolMode](CombatPatrolMode) |             |
| startingWaypoint                    | [WaypointData](WaypointData)         |             |
| startAtGeometricallyClosestWaypoint | bool                                 |             |
| usePathFinding                      | bool                                 |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [PatrolOrderEntityData](PatrolOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PatrolOrderEntityData](PatrolOrderEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
