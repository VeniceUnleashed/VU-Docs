---
title: HealerData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| HealerData()                 | Create a new instance of this structure type.            |
| HealerData(HealerData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| radius      | number |             |
| health      | number |             |
| healingTime | number |             |
| pickUpDelay | number |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [HealerData](/vext/ref/fb/healerdata/) | [Clone](#clone) |            |

### Clone

> [HealerData](/vext/ref/fb/healerdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
