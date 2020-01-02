---
title: StandardMoveWaypointData
---
### Base Classes

[AbstractLocoWaypointData](AbstractLocoWaypointData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                              |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| StandardMoveWaypointData()                                                           | Create a new instance of this container type.                                                                                            |
| StandardMoveWaypointData(StandardMoveWaypointData other)                             | Create a reference copy of an instance of the same type.                                                                                 |
| StandardMoveWaypointData([AbstractLocoWaypointData](AbstractLocoWaypointData) other) | Upcast an instance of type [AbstractLocoWaypointData](AbstractLocoWaypointData) to [StandardMoveWaypointData](StandardMoveWaypointData). |
| StandardMoveWaypointData([WaypointData](WaypointData) other)                         | Upcast an instance of type [WaypointData](WaypointData) to [StandardMoveWaypointData](StandardMoveWaypointData).                         |
| StandardMoveWaypointData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StandardMoveWaypointData](StandardMoveWaypointData).  |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| moveTask | [AILocoMoveTaskData](AILocoMoveTaskData) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StandardMoveWaypointData](StandardMoveWaypointData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StandardMoveWaypointData](StandardMoveWaypointData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
