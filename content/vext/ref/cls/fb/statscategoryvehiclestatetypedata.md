---
title: StatsCategoryVehicleStateTypeData (Frostbite Container)
---
### Base Classes

[StatsCategoryBaseData](StatsCategoryBaseData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatsCategoryVehicleStateTypeData()                                                          | Create a new instance of this container type.                                                                                                             |
| StatsCategoryVehicleStateTypeData(StatsCategoryVehicleStateTypeData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| StatsCategoryVehicleStateTypeData([StatsCategoryBaseData](StatsCategoryBaseData) other)      | Upcast an instance of type [StatsCategoryBaseData](StatsCategoryBaseData) to [StatsCategoryVehicleStateTypeData](StatsCategoryVehicleStateTypeData).      |
| StatsCategoryVehicleStateTypeData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [StatsCategoryVehicleStateTypeData](StatsCategoryVehicleStateTypeData).                        |
| StatsCategoryVehicleStateTypeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatsCategoryVehicleStateTypeData](StatsCategoryVehicleStateTypeData). |

## Properties

| Name   | Type                                     | Description |
| ------ | ---------------------------------------- | ----------- |
| states | [VehicleStateType](VehicleStateType)\[\] |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatsCategoryVehicleStateTypeData](StatsCategoryVehicleStateTypeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatsCategoryVehicleStateTypeData](StatsCategoryVehicleStateTypeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
