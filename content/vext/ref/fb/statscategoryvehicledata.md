---
title: StatsCategoryVehicleData
---
### Base Classes

[StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryVehicleData()                                                          | Create a new instance of this container type.                                                                                           |
| StatsCategoryVehicleData(StatsCategoryVehicleData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| StatsCategoryVehicleData([StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) other)      | Upcast an instance of type [StatsCategoryGuidData](/vext/ref/fb/statscategoryguiddata/) to [StatsCategoryVehicleData](/vext/ref/fb/statscategoryvehicledata/).      |
| StatsCategoryVehicleData([StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) other)      | Upcast an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) to [StatsCategoryVehicleData](/vext/ref/fb/statscategoryvehicledata/).      |
| StatsCategoryVehicleData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [StatsCategoryVehicleData](/vext/ref/fb/statscategoryvehicledata/).                        |
| StatsCategoryVehicleData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatsCategoryVehicleData](/vext/ref/fb/statscategoryvehicledata/). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| firstVehicleId | number |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryVehicleData](/vext/ref/fb/statscategoryvehicledata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatsCategoryVehicleData](/vext/ref/fb/statscategoryvehicledata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
