---
title: AbstractLocoWaypointData
---
### Base Classes

[WaypointData](/vext/ref/fb/waypointdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| AbstractLocoWaypointData()                                                          | Create a new instance of this container type.                                                                                           |
| AbstractLocoWaypointData(AbstractLocoWaypointData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| AbstractLocoWaypointData([WaypointData](/vext/ref/fb/waypointdata/) other)                        | Upcast an instance of type [WaypointData](/vext/ref/fb/waypointdata/) to [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/).                        |
| AbstractLocoWaypointData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/). |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| baseTask | [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata/) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
