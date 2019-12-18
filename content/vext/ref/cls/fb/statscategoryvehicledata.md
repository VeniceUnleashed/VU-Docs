---
title: StatsCategoryVehicleData (Frostbite Container)
---
### Base Classes

[StatsCategoryGuidData](StatsCategoryGuidData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryVehicleData()                                                          | Create a new instance of this container type.                                                                                           |
| StatsCategoryVehicleData(StatsCategoryVehicleData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| StatsCategoryVehicleData([StatsCategoryGuidData](StatsCategoryGuidData) other)      | Upcast an instance of type [StatsCategoryGuidData](StatsCategoryGuidData) to [StatsCategoryVehicleData](StatsCategoryVehicleData).      |
| StatsCategoryVehicleData([StatsCategoryBaseData](StatsCategoryBaseData) other)      | Upcast an instance of type [StatsCategoryBaseData](StatsCategoryBaseData) to [StatsCategoryVehicleData](StatsCategoryVehicleData).      |
| StatsCategoryVehicleData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [StatsCategoryVehicleData](StatsCategoryVehicleData).                        |
| StatsCategoryVehicleData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatsCategoryVehicleData](StatsCategoryVehicleData). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| firstVehicleId | number |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryVehicleData](StatsCategoryVehicleData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatsCategoryVehicleData](StatsCategoryVehicleData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
