---
title: FollowWaypointsEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| FollowWaypointsEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| FollowWaypointsEntityData(FollowWaypointsEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| FollowWaypointsEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [FollowWaypointsEntityData](FollowWaypointsEntityData).                            |
| FollowWaypointsEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FollowWaypointsEntityData](FollowWaypointsEntityData).                    |
| FollowWaypointsEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FollowWaypointsEntityData](FollowWaypointsEntityData).              |
| FollowWaypointsEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FollowWaypointsEntityData](FollowWaypointsEntityData). |

## Properties

| Name                                | Type                   | Description |
| ----------------------------------- | ---------------------- | ----------- |
| typeOfRoute                         | [RouteType](RouteType) |             |
| usePathFinding                      | bool                   |             |
| startAtGeometricallyClosestWaypoint | bool                   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FollowWaypointsEntityData](FollowWaypointsEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FollowWaypointsEntityData](FollowWaypointsEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
