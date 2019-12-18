---
title: VehicleInputTweakData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VehicleInputTweakData()                                                          | Create a new instance of this container type.                                                                                     |
| VehicleInputTweakData(VehicleInputTweakData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VehicleInputTweakData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VehicleInputTweakData](VehicleInputTweakData). |

## Properties

| Name           | Type                                           | Description |
| -------------- | ---------------------------------------------- | ----------- |
| inputTweakType | [VehicleInputTweakType](VehicleInputTweakType) |             |
| minSpeed       | number                                         |             |
| maxSpeed       | number                                         |             |
| minSpeedScale  | number                                         |             |
| maxSpeedScale  | number                                         |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleInputTweakData](VehicleInputTweakData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VehicleInputTweakData](VehicleInputTweakData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
