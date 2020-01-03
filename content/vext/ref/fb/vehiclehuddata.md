---
title: VehicleHudData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| VehicleHudData()                     | Create a new instance of this structure type.            |
| VehicleHudData(VehicleHudData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                                                   | Description |
| ------------------- | ------------------------------------------------------ | ----------- |
| customizationOffset | [Vec3](/vext/ref/shared/class/vec3)                      |             |
| customization       | [VehicleCustomizationAsset](VehicleCustomizationAsset) |             |
| minimapIcon         | [UIHudIcon](UIHudIcon)                                 |             |
| texture             | [TextureAsset](TextureAsset)                           |             |
| vehicleItemHash     | number                                                 |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [VehicleHudData](VehicleHudData) | [Clone](#clone) |            |

### Clone

> [VehicleHudData](VehicleHudData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
