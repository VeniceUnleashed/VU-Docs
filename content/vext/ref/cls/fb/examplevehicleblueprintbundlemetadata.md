---
title: ExampleVehicleBlueprintBundleMetadata (Frostbite Container)
---
### Base Classes

[BlueprintBundleMetadata](BlueprintBundleMetadata)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                      | Description                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ExampleVehicleBlueprintBundleMetadata()                                                          | Create a new instance of this container type.                                                                                                                     |
| ExampleVehicleBlueprintBundleMetadata(ExampleVehicleBlueprintBundleMetadata other)               | Create a reference copy of an instance of the same type.                                                                                                          |
| ExampleVehicleBlueprintBundleMetadata([BlueprintBundleMetadata](BlueprintBundleMetadata) other)  | Upcast an instance of type [BlueprintBundleMetadata](BlueprintBundleMetadata) to [ExampleVehicleBlueprintBundleMetadata](ExampleVehicleBlueprintBundleMetadata).  |
| ExampleVehicleBlueprintBundleMetadata([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ExampleVehicleBlueprintBundleMetadata](ExampleVehicleBlueprintBundleMetadata). |

## Properties

| Name               | Type                                     | Description |
| ------------------ | ---------------------------------------- | ----------- |
| exampleVehicleType | [ExampleVehicleType](ExampleVehicleType) |             |

## Methods

| Type                                                                           | Name            | Parameters                                     |
| ------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ExampleVehicleBlueprintBundleMetadata](ExampleVehicleBlueprintBundleMetadata) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ExampleVehicleBlueprintBundleMetadata](ExampleVehicleBlueprintBundleMetadata) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
