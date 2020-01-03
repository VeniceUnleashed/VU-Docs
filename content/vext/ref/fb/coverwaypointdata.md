---
title: CoverWaypointData
---
### Base Classes

[AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| CoverWaypointData()                                                           | Create a new instance of this container type.                                                                              |
| CoverWaypointData(CoverWaypointData other)                                    | Create a reference copy of an instance of the same type.                                                                   |
| CoverWaypointData([AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/) other) | Upcast an instance of type [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/) to [CoverWaypointData](/vext/ref/fb/coverwaypointdata/). |
| CoverWaypointData([WaypointData](/vext/ref/fb/waypointdata/) other)                         | Upcast an instance of type [WaypointData](/vext/ref/fb/waypointdata/) to [CoverWaypointData](/vext/ref/fb/coverwaypointdata/).                         |
| CoverWaypointData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CoverWaypointData](/vext/ref/fb/coverwaypointdata/).  |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| coverTask | [AILocoCoverTaskData](/vext/ref/fb/ailococovertaskdata/) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [CoverWaypointData](/vext/ref/fb/coverwaypointdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CoverWaypointData](/vext/ref/fb/coverwaypointdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
