---
title: DamageToVehicleEvent
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| DamageToVehicleEvent()                                                          | Create a new instance of this container type.                                                                                   |
| DamageToVehicleEvent(DamageToVehicleEvent other)                                | Create a reference copy of an instance of the same type.                                                                        |
| DamageToVehicleEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [DamageToVehicleEvent](DamageToVehicleEvent).                          |
| DamageToVehicleEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DamageToVehicleEvent](DamageToVehicleEvent). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| vehicleName  | string |             |
| weaponName   | string |             |
| damageAmount | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [DamageToVehicleEvent](DamageToVehicleEvent) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DamageToVehicleEvent](DamageToVehicleEvent) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
