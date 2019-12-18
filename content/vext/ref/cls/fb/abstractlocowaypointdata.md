---
title: AbstractLocoWaypointData (Frostbite Container)
---
### Base Classes

[WaypointData](WaypointData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| AbstractLocoWaypointData()                                                          | Create a new instance of this container type.                                                                                           |
| AbstractLocoWaypointData(AbstractLocoWaypointData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| AbstractLocoWaypointData([WaypointData](WaypointData) other)                        | Upcast an instance of type [WaypointData](WaypointData) to [AbstractLocoWaypointData](AbstractLocoWaypointData).                        |
| AbstractLocoWaypointData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AbstractLocoWaypointData](AbstractLocoWaypointData). |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| baseTask | [AILocoBaseTaskData](AILocoBaseTaskData) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AbstractLocoWaypointData](AbstractLocoWaypointData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AbstractLocoWaypointData](AbstractLocoWaypointData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
