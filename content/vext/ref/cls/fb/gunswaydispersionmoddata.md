---
title: GunSwayDispersionModData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                              | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- |
| GunSwayDispersionModData()                               | Create a new instance of this structure type.            |
| GunSwayDispersionModData(GunSwayDispersionModData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                      | Type   | Description |
| ------------------------- | ------ | ----------- |
| minAngleModifier          | number |             |
| maxAngleModifier          | number |             |
| increasePerShotModifier   | number |             |
| decreasePerSecondModifier | number |             |

## Methods

| Type                                                 | Name            | Parameters |
| ---------------------------------------------------- | --------------- | ---------- |
| [GunSwayDispersionModData](GunSwayDispersionModData) | [Clone](#clone) |            |

### Clone

> [GunSwayDispersionModData](GunSwayDispersionModData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
