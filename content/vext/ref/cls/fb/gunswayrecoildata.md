---
title: GunSwayRecoilData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| GunSwayRecoilData()                        | Create a new instance of this structure type.            |
| GunSwayRecoilData(GunSwayRecoilData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                                   | Type   | Description |
| -------------------------------------- | ------ | ----------- |
| recoilAmplitudeMax                     | number |             |
| recoilAmplitudeIncPerShot              | number |             |
| horizontalRecoilAmplitudeIncPerShotMin | number |             |
| horizontalRecoilAmplitudeIncPerShotMax | number |             |
| horizontalRecoilAmplitudeMax           | number |             |
| recoilAmplitudeDecreaseFactor          | number |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [GunSwayRecoilData](GunSwayRecoilData) | [Clone](#clone) |            |

### Clone

> [GunSwayRecoilData](GunSwayRecoilData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
