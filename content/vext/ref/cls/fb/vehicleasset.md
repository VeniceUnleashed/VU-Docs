---
title: VehicleAsset (Frostbite Container)
---
### Base Classes

[VehicleBlueprint](VehicleBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| VehicleAsset()                                                          | Create a new instance of this container type.                                                                   |
| VehicleAsset(VehicleAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| VehicleAsset([VehicleBlueprint](VehicleBlueprint) other)                | Upcast an instance of type [VehicleBlueprint](VehicleBlueprint) to [VehicleAsset](VehicleAsset).                |
| VehicleAsset([ObjectBlueprint](ObjectBlueprint) other)                  | Upcast an instance of type [ObjectBlueprint](ObjectBlueprint) to [VehicleAsset](VehicleAsset).                  |
| VehicleAsset([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [VehicleAsset](VehicleAsset).                              |
| VehicleAsset([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [VehicleAsset](VehicleAsset).                      |
| VehicleAsset([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [VehicleAsset](VehicleAsset).                          |
| VehicleAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VehicleAsset](VehicleAsset).                                      |
| VehicleAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VehicleAsset](VehicleAsset). |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [VehicleAsset](VehicleAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VehicleAsset](VehicleAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
