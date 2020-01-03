---
title: VehicleWaypointData
---
### Base Classes

[WaypointData](/vext/ref/fb/waypointdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| VehicleWaypointData()                                                          | Create a new instance of this container type.                                                                                 |
| VehicleWaypointData(VehicleWaypointData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| VehicleWaypointData([WaypointData](/vext/ref/fb/waypointdata/) other)                        | Upcast an instance of type [WaypointData](/vext/ref/fb/waypointdata/) to [VehicleWaypointData](/vext/ref/fb/vehiclewaypointdata/).                        |
| VehicleWaypointData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleWaypointData](/vext/ref/fb/vehiclewaypointdata/). |

## Properties

| Name                       | Type   | Description |
| -------------------------- | ------ | ----------- |
| speed                      | number |             |
| speedOverrideMovingTowards | number |             |
| angleoffset                | number |             |
| stopHereRadius             | number |             |
| stoppingDeceleration       | number |             |
| minSlowdownSpeed           | number |             |
| stopHere                   | bool   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [VehicleWaypointData](/vext/ref/fb/vehiclewaypointdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleWaypointData](/vext/ref/fb/vehiclewaypointdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
