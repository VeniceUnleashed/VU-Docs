---
title: GunSwayStandData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| GunSwayStandData()                       | Create a new instance of this structure type.            |
| GunSwayStandData(GunSwayStandData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name   | Type                                               | Description |
| ------ | -------------------------------------------------- | ----------- |
| noZoom | [GunSwayBaseMoveJumpData](GunSwayBaseMoveJumpData) |             |
| zoom   | [GunSwayBaseMoveJumpData](GunSwayBaseMoveJumpData) |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [GunSwayStandData](GunSwayStandData) | [Clone](#clone) |            |

### Clone

> [GunSwayStandData](GunSwayStandData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
