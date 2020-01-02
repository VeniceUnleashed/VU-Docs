---
title: GunSwayStanceTransition
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| GunSwayStanceTransition()                              | Create a new instance of this structure type.            |
| GunSwayStanceTransition(GunSwayStanceTransition other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type                                           | Description |
| --------------- | ---------------------------------------------- | ----------- |
| maxPenaltyValue | [GunSwayDispersionData](GunSwayDispersionData) |             |
| coolDown        | number                                         |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [GunSwayStanceTransition](GunSwayStanceTransition) | [Clone](#clone) |            |

### Clone

> [GunSwayStanceTransition](GunSwayStanceTransition) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
