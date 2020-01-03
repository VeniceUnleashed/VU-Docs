---
title: StatsCategoryVehicleStateTypeData
---
### Base Classes

[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryVehicleStateTypeData()                                                          | Create a new instance of this container type.                                                                                                             |
| StatsCategoryVehicleStateTypeData(StatsCategoryVehicleStateTypeData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| StatsCategoryVehicleStateTypeData([StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) other)      | Upcast an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) to [StatsCategoryVehicleStateTypeData](/vext/ref/fb/statscategoryvehiclestatetypedata/).      |
| StatsCategoryVehicleStateTypeData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryVehicleStateTypeData](/vext/ref/fb/statscategoryvehiclestatetypedata/).                        |
| StatsCategoryVehicleStateTypeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryVehicleStateTypeData](/vext/ref/fb/statscategoryvehiclestatetypedata/). |

## Properties

| Name   | Type                                     | Description |
| ------ | ---------------------------------------- | ----------- |
| states | [VehicleStateType](/vext/ref/fb/vehiclestatetype/)\[\] |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryVehicleStateTypeData](/vext/ref/fb/statscategoryvehiclestatetypedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryVehicleStateTypeData](/vext/ref/fb/statscategoryvehiclestatetypedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
