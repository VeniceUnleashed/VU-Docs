---
title: RumbleFiringData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| RumbleFiringData()                       | Create a new instance of this structure type.            |
| RumbleFiringData(RumbleFiringData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| lowRumble      | number |             |
| highRumble     | number |             |
| rumbleDuration | number |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [RumbleFiringData](/vext/ref/fb/rumblefiringdata/) | [Clone](#clone) |            |

### Clone

> [RumbleFiringData](/vext/ref/fb/rumblefiringdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
