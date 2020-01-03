---
title: GunSwayBaseMoveData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| GunSwayBaseMoveData()                          | Create a new instance of this structure type.            |
| GunSwayBaseMoveData(GunSwayBaseMoveData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type                                           | Description |
| ---------- | ---------------------------------------------- | ----------- |
| baseValue  | [GunSwayDispersionData](GunSwayDispersionData) |             |
| moving     | [GunSwayDispersionData](GunSwayDispersionData) |             |
| recoil     | [GunSwayRecoilData](GunSwayRecoilData)         |             |
| gunSwayLag | [GunSwayLagData](GunSwayLagData)               |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [GunSwayBaseMoveData](GunSwayBaseMoveData) | [Clone](#clone) |            |

### Clone

> [GunSwayBaseMoveData](GunSwayBaseMoveData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
