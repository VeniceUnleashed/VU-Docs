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
| baseValue  | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata/) |             |
| recoil     | [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata/)         |             |
| gunSwayLag | [GunSwayLagData](/vext/ref/fb/gunswaylagdata/)               |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [GunSwayBaseData](/vext/ref/fb/gunswaybasedata/) | [Clone](#clone) |            |

### Clone

> [GunSwayBaseData](/vext/ref/fb/gunswaybasedata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
