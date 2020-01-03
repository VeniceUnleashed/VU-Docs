---
title: VeniceVehicleCustomizationAsset
---
### Base Classes

[VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                              |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceVehicleCustomizationAsset()                                                             | Create a new instance of this container type.                                                                                                            |
| VeniceVehicleCustomizationAsset(VeniceVehicleCustomizationAsset other)                        | Create a reference copy of an instance of the same type.                                                                                                 |
| VeniceVehicleCustomizationAsset([VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset/) other) | Upcast an instance of type [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset/) to [VeniceVehicleCustomizationAsset](/vext/ref/fb/venicevehiclecustomizationasset/). |
| VeniceVehicleCustomizationAsset([Asset](/vext/ref/fb/asset/) other)                                         | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VeniceVehicleCustomizationAsset](/vext/ref/fb/venicevehiclecustomizationasset/).                                         |
| VeniceVehicleCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceVehicleCustomizationAsset](/vext/ref/fb/venicevehiclecustomizationasset/).    |

## Properties

| Name     | Type                               | Description |
| -------- | ---------------------------------- | ----------- |
| category | [VehicleCategory](/vext/ref/fb/vehiclecategory/) |             |
| nameSid  | string                             |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceVehicleCustomizationAsset](/vext/ref/fb/venicevehiclecustomizationasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceVehicleCustomizationAsset](/vext/ref/fb/venicevehiclecustomizationasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
