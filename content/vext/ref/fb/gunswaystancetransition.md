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
| maxPenaltyValue | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata/) |             |
| coolDown        | number                                         |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition/) | [Clone](#clone) |            |

### Clone

> [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
