---
title: VehicleCustomizationAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleCustomizationAsset()                                                          | Create a new instance of this container type.                                                                                             |
| VehicleCustomizationAsset(VehicleCustomizationAsset other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VehicleCustomizationAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset/).                                      |
| VehicleCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset/). |

## Properties

| Name          | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| customization | [CustomizationTable](/vext/ref/fb/customizationtable/) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
