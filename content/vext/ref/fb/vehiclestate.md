---
title: VehicleState
---
### Base Classes

[MetricState](/vext/ref/fb/metricstate/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| VehicleState()                                                          | Create a new instance of this container type.                                                                   |
| VehicleState(VehicleState other)                                        | Create a reference copy of an instance of the same type.                                                        |
| VehicleState([MetricState](/vext/ref/fb/metricstate/) other)                          | Upcast an instance of type [MetricState](/vext/ref/fb/metricstate/) to [VehicleState](/vext/ref/fb/vehiclestate/).                          |
| VehicleState([MetricEvent](/vext/ref/fb/metricevent/) other)                          | Upcast an instance of type [MetricEvent](/vext/ref/fb/metricevent/) to [VehicleState](/vext/ref/fb/vehiclestate/).                          |
| VehicleState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleState](/vext/ref/fb/vehiclestate/). |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| vehicleName | string |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [VehicleState](/vext/ref/fb/vehiclestate/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleState](/vext/ref/fb/vehiclestate/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
