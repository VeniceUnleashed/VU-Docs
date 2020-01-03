---
title: SmokeJammingData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| SmokeJammingData()                       | Create a new instance of this structure type.            |
| SmokeJammingData(SmokeJammingData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                               | Type   | Description |
| ---------------------------------- | ------ | ----------- |
| jammingTime                        | number |             |
| maxRadius                          | number |             |
| minRadius                          | number |             |
| targetUpdateTime                   | number |             |
| enableSmokeJamming                 | bool   |             |
| jammingPositionIsLocationDependent | bool   |             |
| reportJammedBasedOnStartPosition   | bool   |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [SmokeJammingData](/vext/ref/fb/smokejammingdata/) | [Clone](#clone) |            |

### Clone

> [SmokeJammingData](/vext/ref/fb/smokejammingdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
