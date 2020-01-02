---
title: AimingPoseData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| AimingPoseData()                     | Create a new instance of this structure type.            |
| AimingPoseData(AimingPoseData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| minimumPitch     | number |             |
| maximumPitch     | number |             |
| targetingFov     | number |             |
| aimSteadiness    | number |             |
| speedMultiplier  | number |             |
| recoilMultiplier | number |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [AimingPoseData](AimingPoseData) | [Clone](#clone) |            |

### Clone

> [AimingPoseData](AimingPoseData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
