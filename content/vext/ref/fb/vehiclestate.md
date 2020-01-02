---
title: VehicleState
---
### Base Classes

[MetricState](MetricState)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| VehicleState()                                                          | Create a new instance of this container type.                                                                   |
| VehicleState(VehicleState other)                                        | Create a reference copy of an instance of the same type.                                                        |
| VehicleState([MetricState](MetricState) other)                          | Upcast an instance of type [MetricState](MetricState) to [VehicleState](VehicleState).                          |
| VehicleState([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [VehicleState](VehicleState).                          |
| VehicleState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleState](VehicleState). |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| vehicleName | string |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [VehicleState](VehicleState) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleState](VehicleState) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
