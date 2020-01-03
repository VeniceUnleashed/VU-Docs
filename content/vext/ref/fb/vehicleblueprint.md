---
title: VehicleBlueprint
---
### Base Classes

[ObjectBlueprint](ObjectBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| VehicleBlueprint()                                                          | Create a new instance of this container type.                                                                           |
| VehicleBlueprint(VehicleBlueprint other)                                    | Create a reference copy of an instance of the same type.                                                                |
| VehicleBlueprint([ObjectBlueprint](ObjectBlueprint) other)                  | Upcast an instance of type [ObjectBlueprint](ObjectBlueprint) to [VehicleBlueprint](VehicleBlueprint).                  |
| VehicleBlueprint([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [VehicleBlueprint](VehicleBlueprint).                              |
| VehicleBlueprint([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [VehicleBlueprint](VehicleBlueprint).                      |
| VehicleBlueprint([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [VehicleBlueprint](VehicleBlueprint).                          |
| VehicleBlueprint([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VehicleBlueprint](VehicleBlueprint).                                      |
| VehicleBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleBlueprint](VehicleBlueprint). |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [VehicleBlueprint](VehicleBlueprint) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleBlueprint](VehicleBlueprint) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
