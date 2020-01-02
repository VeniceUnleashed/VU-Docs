---
title: VehicleCustomizationAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleCustomizationAsset()                                                          | Create a new instance of this container type.                                                                                             |
| VehicleCustomizationAsset(VehicleCustomizationAsset other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VehicleCustomizationAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VehicleCustomizationAsset](VehicleCustomizationAsset).                                      |
| VehicleCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleCustomizationAsset](VehicleCustomizationAsset). |

## Properties

| Name          | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| customization | [CustomizationTable](CustomizationTable) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VehicleCustomizationAsset](VehicleCustomizationAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleCustomizationAsset](VehicleCustomizationAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
