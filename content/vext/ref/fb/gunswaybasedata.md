---
title: GunSwayBaseData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| GunSwayBaseData()                      | Create a new instance of this structure type.            |
| GunSwayBaseData(GunSwayBaseData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type                                           | Description |
| ---------- | ---------------------------------------------- | ----------- |
| baseValue  | [GunSwayDispersionData](GunSwayDispersionData) |             |
| recoil     | [GunSwayRecoilData](GunSwayRecoilData)         |             |
| gunSwayLag | [GunSwayLagData](GunSwayLagData)               |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [GunSwayBaseData](GunSwayBaseData) | [Clone](#clone) |            |

### Clone

> [GunSwayBaseData](GunSwayBaseData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
