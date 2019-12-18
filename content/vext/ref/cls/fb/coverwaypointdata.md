---
title: CoverWaypointData (Frostbite Container)
---
### Base Classes

[AbstractLocoWaypointData](AbstractLocoWaypointData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| CoverWaypointData()                                                           | Create a new instance of this container type.                                                                              |
| CoverWaypointData(CoverWaypointData other)                                    | Create a reference copy of an instance of the same type.                                                                   |
| CoverWaypointData([AbstractLocoWaypointData](AbstractLocoWaypointData) other) | Upcast an instance of type [AbstractLocoWaypointData](AbstractLocoWaypointData) to [CoverWaypointData](CoverWaypointData). |
| CoverWaypointData([WaypointData](WaypointData) other)                         | Upcast an instance of type [WaypointData](WaypointData) to [CoverWaypointData](CoverWaypointData).                         |
| CoverWaypointData([DataContainer](/vext/ref/cls/shr/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CoverWaypointData](CoverWaypointData).  |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| coverTask | [AILocoCoverTaskData](AILocoCoverTaskData) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [CoverWaypointData](CoverWaypointData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CoverWaypointData](CoverWaypointData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
