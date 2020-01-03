---
title: FollowWaypointsEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| FollowWaypointsEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| FollowWaypointsEntityData(FollowWaypointsEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| FollowWaypointsEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata/).                            |
| FollowWaypointsEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata/).                    |
| FollowWaypointsEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata/).              |
| FollowWaypointsEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata/). |

## Properties

| Name                                | Type                   | Description |
| ----------------------------------- | ---------------------- | ----------- |
| typeOfRoute                         | [RouteType](/vext/ref/fb/routetype/) |             |
| usePathFinding                      | bool                   |             |
| startAtGeometricallyClosestWaypoint | bool                   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
