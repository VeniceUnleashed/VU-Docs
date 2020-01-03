---
title: VehicleSoundData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| VehicleSoundData()                                                          | Create a new instance of this container type.                                                                           |
| VehicleSoundData(VehicleSoundData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| VehicleSoundData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleSoundData](/vext/ref/fb/vehiclesounddata/). |

## Properties

| Name         | Type                     | Description |
| ------------ | ------------------------ | ----------- |
| bulletImpact | [SoundAsset](/vext/ref/fb/soundasset/) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [VehicleSoundData](/vext/ref/fb/vehiclesounddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleSoundData](/vext/ref/fb/vehiclesounddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
