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
| baseValue  | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata/) |             |
| moving     | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata/) |             |
| recoil     | [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata/)         |             |
| gunSwayLag | [GunSwayLagData](/vext/ref/fb/gunswaylagdata/)               |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [GunSwayBaseMoveData](/vext/ref/fb/gunswaybasemovedata/) | [Clone](#clone) |            |

### Clone

> [GunSwayBaseMoveData](/vext/ref/fb/gunswaybasemovedata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
