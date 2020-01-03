---
title: VehicleAsset
---
### Base Classes

[VehicleBlueprint](/vext/ref/fb/vehicleblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| VehicleAsset()                                                          | Create a new instance of this container type.                                                                   |
| VehicleAsset(VehicleAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| VehicleAsset([VehicleBlueprint](/vext/ref/fb/vehicleblueprint/) other)                | Upcast an instance of type [VehicleBlueprint](/vext/ref/fb/vehicleblueprint/) to [VehicleAsset](/vext/ref/fb/vehicleasset/).                |
| VehicleAsset([ObjectBlueprint](/vext/ref/fb/objectblueprint/) other)                  | Upcast an instance of type [ObjectBlueprint](/vext/ref/fb/objectblueprint/) to [VehicleAsset](/vext/ref/fb/vehicleasset/).                  |
| VehicleAsset([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [VehicleAsset](/vext/ref/fb/vehicleasset/).                              |
| VehicleAsset([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [VehicleAsset](/vext/ref/fb/vehicleasset/).                      |
| VehicleAsset([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [VehicleAsset](/vext/ref/fb/vehicleasset/).                          |
| VehicleAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VehicleAsset](/vext/ref/fb/vehicleasset/).                                      |
| VehicleAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleAsset](/vext/ref/fb/vehicleasset/). |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [VehicleAsset](/vext/ref/fb/vehicleasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleAsset](/vext/ref/fb/vehicleasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
