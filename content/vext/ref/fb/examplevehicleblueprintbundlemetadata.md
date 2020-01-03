---
title: ExampleVehicleBlueprintBundleMetadata
---
### Base Classes

[BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                      | Description                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ExampleVehicleBlueprintBundleMetadata()                                                          | Create a new instance of this container type.                                                                                                                     |
| ExampleVehicleBlueprintBundleMetadata(ExampleVehicleBlueprintBundleMetadata other)               | Create a reference copy of an instance of the same type.                                                                                                          |
| ExampleVehicleBlueprintBundleMetadata([BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata/) other)  | Upcast an instance of type [BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata/) to [ExampleVehicleBlueprintBundleMetadata](/vext/ref/fb/examplevehicleblueprintbundlemetadata/).  |
| ExampleVehicleBlueprintBundleMetadata([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ExampleVehicleBlueprintBundleMetadata](/vext/ref/fb/examplevehicleblueprintbundlemetadata/). |

## Properties

| Name               | Type                                     | Description |
| ------------------ | ---------------------------------------- | ----------- |
| exampleVehicleType | [ExampleVehicleType](/vext/ref/fb/examplevehicletype/) |             |

## Methods

| Type                                                                           | Name            | Parameters                                     |
| ------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ExampleVehicleBlueprintBundleMetadata](/vext/ref/fb/examplevehicleblueprintbundlemetadata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ExampleVehicleBlueprintBundleMetadata](/vext/ref/fb/examplevehicleblueprintbundlemetadata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
