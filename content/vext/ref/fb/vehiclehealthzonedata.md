---
title: VehicleHealthZoneData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| VehicleHealthZoneData()                            | Create a new instance of this structure type.            |
| VehicleHealthZoneData(VehicleHealthZoneData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                      | Type   | Description |
| ------------------------- | ------ | ----------- |
| maxHealth                 | number |             |
| maxShieldHealth           | number |             |
| damageAngleMultiplier     | number |             |
| minDamageAngle            | number |             |
| useDamageAngleCalculation | bool   |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata/) | [Clone](#clone) |            |

### Clone

> [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
