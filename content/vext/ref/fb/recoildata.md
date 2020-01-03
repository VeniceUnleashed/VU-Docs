---
title: RecoilData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| RecoilData()                 | Create a new instance of this structure type.            |
| RecoilData(RecoilData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| maxRecoilAngleX         | number |             |
| minRecoilAngleX         | number |             |
| maxRecoilAngleY         | number |             |
| minRecoilAngleY         | number |             |
| maxRecoilAngleZ         | number |             |
| minRecoilAngleZ         | number |             |
| maxRecoilFov            | number |             |
| minRecoilFov            | number |             |
| recoilFollowsDispersion | bool   |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [RecoilData](/vext/ref/fb/recoildata/) | [Clone](#clone) |            |

### Clone

> [RecoilData](/vext/ref/fb/recoildata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
