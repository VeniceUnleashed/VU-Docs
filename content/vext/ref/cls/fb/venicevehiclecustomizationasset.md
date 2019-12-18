---
title: VeniceVehicleCustomizationAsset (Frostbite Container)
---
### Base Classes

[VehicleCustomizationAsset](VehicleCustomizationAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                              |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceVehicleCustomizationAsset()                                                             | Create a new instance of this container type.                                                                                                            |
| VeniceVehicleCustomizationAsset(VeniceVehicleCustomizationAsset other)                        | Create a reference copy of an instance of the same type.                                                                                                 |
| VeniceVehicleCustomizationAsset([VehicleCustomizationAsset](VehicleCustomizationAsset) other) | Upcast an instance of type [VehicleCustomizationAsset](VehicleCustomizationAsset) to [VeniceVehicleCustomizationAsset](VeniceVehicleCustomizationAsset). |
| VeniceVehicleCustomizationAsset([Asset](Asset) other)                                         | Upcast an instance of type [Asset](Asset) to [VeniceVehicleCustomizationAsset](VeniceVehicleCustomizationAsset).                                         |
| VeniceVehicleCustomizationAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VeniceVehicleCustomizationAsset](VeniceVehicleCustomizationAsset).    |

## Properties

| Name     | Type                               | Description |
| -------- | ---------------------------------- | ----------- |
| category | [VehicleCategory](VehicleCategory) |             |
| nameSid  | string                             |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceVehicleCustomizationAsset](VeniceVehicleCustomizationAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VeniceVehicleCustomizationAsset](VeniceVehicleCustomizationAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
