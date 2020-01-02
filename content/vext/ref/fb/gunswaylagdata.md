---
title: GunSwayLagData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| GunSwayLagData()                     | Create a new instance of this structure type.            |
| GunSwayLagData(GunSwayLagData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| moveStrafeModifier  | number |             |
| moveForwardModifier | number |             |
| rotateYawModifier   | number |             |
| rotatePitchModifier | number |             |
| releaseModifier     | number |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [GunSwayLagData](GunSwayLagData) | [Clone](#clone) |            |

### Clone

> [GunSwayLagData](GunSwayLagData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
