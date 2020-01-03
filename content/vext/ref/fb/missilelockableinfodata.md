---
title: MissileLockableInfoData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| MissileLockableInfoData()                              | Create a new instance of this structure type.            |
| MissileLockableInfoData(MissileLockableInfoData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| heatSignature  | number |             |
| radarSignature | number |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [MissileLockableInfoData](/vext/ref/fb/missilelockableinfodata/) | [Clone](#clone) |            |

### Clone

> [MissileLockableInfoData](/vext/ref/fb/missilelockableinfodata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
