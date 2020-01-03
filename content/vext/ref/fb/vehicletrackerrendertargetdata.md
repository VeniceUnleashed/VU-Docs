---
title: VehicleTrackerRenderTargetData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                          | Description                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------- |
| VehicleTrackerRenderTargetData()                                     | Create a new instance of this structure type.            |
| VehicleTrackerRenderTargetData(VehicleTrackerRenderTargetData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type                              | Description |
| ---------------------- | --------------------------------- | ----------- |
| positionOffset         | [Vec2](/vext/ref/shared/class/vec2) |             |
| renderTargetIndex      | number                            |             |
| renderTargetApectRatio | number                            |             |
| scaleSize              | number                            |             |
| useRenderTarget        | bool                              |             |

## Methods

| Type                                                             | Name            | Parameters |
| ---------------------------------------------------------------- | --------------- | ---------- |
| [VehicleTrackerRenderTargetData](VehicleTrackerRenderTargetData) | [Clone](#clone) |            |

### Clone

> [VehicleTrackerRenderTargetData](VehicleTrackerRenderTargetData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
