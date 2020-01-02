---
title: GunSwayBaseMoveJumpData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| GunSwayBaseMoveJumpData()                              | Create a new instance of this structure type.            |
| GunSwayBaseMoveJumpData(GunSwayBaseMoveJumpData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                 | Type                                           | Description |
| -------------------- | ---------------------------------------------- | ----------- |
| baseValue            | [GunSwayDispersionData](GunSwayDispersionData) |             |
| moving               | [GunSwayDispersionData](GunSwayDispersionData) |             |
| jumping              | [GunSwayDispersionData](GunSwayDispersionData) |             |
| sprinting            | [GunSwayDispersionData](GunSwayDispersionData) |             |
| vaultingSmallObject  | [GunSwayDispersionData](GunSwayDispersionData) |             |
| vaultingMediumObject | [GunSwayDispersionData](GunSwayDispersionData) |             |
| recoil               | [GunSwayRecoilData](GunSwayRecoilData)         |             |
| gunSwayLag           | [GunSwayLagData](GunSwayLagData)               |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [GunSwayBaseMoveJumpData](GunSwayBaseMoveJumpData) | [Clone](#clone) |            |

### Clone

> [GunSwayBaseMoveJumpData](GunSwayBaseMoveJumpData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
