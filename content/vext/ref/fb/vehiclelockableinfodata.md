---
title: VehicleLockableInfoData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| VehicleLockableInfoData()                              | Create a new instance of this structure type.            |
| VehicleLockableInfoData(VehicleLockableInfoData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                     | Type   | Description |
| ------------------------ | ------ | ----------- |
| heatSignature            | number |             |
| radarSignature           | number |             |
| lowAltitudeHeight        | number |             |
| lowAltitudeHeatSignature | number |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata/) | [Clone](#clone) |            |

### Clone

> [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
