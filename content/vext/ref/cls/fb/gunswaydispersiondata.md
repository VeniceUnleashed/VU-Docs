---
title: GunSwayDispersionData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| GunSwayDispersionData()                            | Create a new instance of this structure type.            |
| GunSwayDispersionData(GunSwayDispersionData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| minAngle          | number |             |
| maxAngle          | number |             |
| increasePerShot   | number |             |
| decreasePerSecond | number |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [GunSwayDispersionData](GunSwayDispersionData) | [Clone](#clone) |            |

### Clone

> [GunSwayDispersionData](GunSwayDispersionData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
