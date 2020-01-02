---
title: VehicleWaypointData
---
### Base Classes

[WaypointData](WaypointData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| VehicleWaypointData()                                                          | Create a new instance of this container type.                                                                                 |
| VehicleWaypointData(VehicleWaypointData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| VehicleWaypointData([WaypointData](WaypointData) other)                        | Upcast an instance of type [WaypointData](WaypointData) to [VehicleWaypointData](VehicleWaypointData).                        |
| VehicleWaypointData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleWaypointData](VehicleWaypointData). |

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
| [VehicleWaypointData](VehicleWaypointData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleWaypointData](VehicleWaypointData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
