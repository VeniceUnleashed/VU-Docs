---
title: VehicleSoundData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| VehicleSoundData()                                                          | Create a new instance of this container type.                                                                           |
| VehicleSoundData(VehicleSoundData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| VehicleSoundData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VehicleSoundData](VehicleSoundData). |

## Properties

| Name         | Type                     | Description |
| ------------ | ------------------------ | ----------- |
| bulletImpact | [SoundAsset](SoundAsset) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [VehicleSoundData](VehicleSoundData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VehicleSoundData](VehicleSoundData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
