---
title: SoldierAnimatedCameraData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                | Description                                              |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| SoldierAnimatedCameraData()                                | Create a new instance of this structure type.            |
| SoldierAnimatedCameraData(SoldierAnimatedCameraData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| cameraTransitionTime | number |             |
| enableFeature        | bool   |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [SoldierAnimatedCameraData](SoldierAnimatedCameraData) | [Clone](#clone) |            |

### Clone

> [SoldierAnimatedCameraData](SoldierAnimatedCameraData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
