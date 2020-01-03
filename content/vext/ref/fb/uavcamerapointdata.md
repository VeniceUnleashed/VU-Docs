---
title: UavCameraPointData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| UavCameraPointData()                         | Create a new instance of this structure type.            |
| UavCameraPointData(UavCameraPointData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| minTime          | number |             |
| maxTime          | number |             |
| speed            | number |             |
| accelerationTime | number |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [UavCameraPointData](/vext/ref/fb/uavcamerapointdata/) | [Clone](#clone) |            |

### Clone

> [UavCameraPointData](/vext/ref/fb/uavcamerapointdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
