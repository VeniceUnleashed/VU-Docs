---
title: AimingConstraintsData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| AimingConstraintsData()                            | Create a new instance of this structure type.            |
| AimingConstraintsData(AimingConstraintsData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| minYaw   | number |             |
| maxYaw   | number |             |
| minPitch | number |             |
| maxPitch | number |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [AimingConstraintsData](AimingConstraintsData) | [Clone](#clone) |            |

### Clone

> [AimingConstraintsData](AimingConstraintsData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
