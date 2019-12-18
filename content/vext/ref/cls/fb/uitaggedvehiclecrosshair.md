---
title: UITaggedVehicleCrosshair (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                              | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- |
| UITaggedVehicleCrosshair()                               | Create a new instance of this structure type.            |
| UITaggedVehicleCrosshair(UITaggedVehicleCrosshair other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| minDistance | number |             |
| maxDistance | number |             |
| minSize     | number |             |
| maxSize     | number |             |

## Methods

| Type                                                 | Name            | Parameters |
| ---------------------------------------------------- | --------------- | ---------- |
| [UITaggedVehicleCrosshair](UITaggedVehicleCrosshair) | [Clone](#clone) |            |

### Clone

> [UITaggedVehicleCrosshair](UITaggedVehicleCrosshair) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
