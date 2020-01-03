---
title: GunSwayCrouchProneData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| GunSwayCrouchProneData()                             | Create a new instance of this structure type.            |
| GunSwayCrouchProneData(GunSwayCrouchProneData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name   | Type                                       | Description |
| ------ | ------------------------------------------ | ----------- |
| noZoom | [GunSwayBaseMoveData](GunSwayBaseMoveData) |             |
| zoom   | [GunSwayBaseMoveData](GunSwayBaseMoveData) |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [GunSwayCrouchProneData](GunSwayCrouchProneData) | [Clone](#clone) |            |

### Clone

> [GunSwayCrouchProneData](GunSwayCrouchProneData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
