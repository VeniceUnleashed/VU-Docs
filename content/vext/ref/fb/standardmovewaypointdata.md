---
title: StandardMoveWaypointData
---
### Base Classes

[AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                              |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| StandardMoveWaypointData()                                                           | Create a new instance of this container type.                                                                                            |
| StandardMoveWaypointData(StandardMoveWaypointData other)                             | Create a reference copy of an instance of the same type.                                                                                 |
| StandardMoveWaypointData([AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/) other) | Upcast an instance of type [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/) to [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata/). |
| StandardMoveWaypointData([WaypointData](/vext/ref/fb/waypointdata/) other)                         | Upcast an instance of type [WaypointData](/vext/ref/fb/waypointdata/) to [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata/).                         |
| StandardMoveWaypointData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata/).  |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| moveTask | [AILocoMoveTaskData](/vext/ref/fb/ailocomovetaskdata/) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
