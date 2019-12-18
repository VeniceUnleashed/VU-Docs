---
title: VehicleParachuteBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| VehicleParachuteBinding()                              | Create a new instance of this structure type.            |
| VehicleParachuteBinding(VehicleParachuteBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type             | Description |
| ----------- | ---------------- | ----------- |
| enabled     | [AntRef](AntRef) |             |
| vehicleType | [AntRef](AntRef) |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [VehicleParachuteBinding](VehicleParachuteBinding) | [Clone](#clone) |            |

### Clone

> [VehicleParachuteBinding](VehicleParachuteBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
