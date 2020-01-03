---
title: HIKData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor            | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| HIKData()              | Create a new instance of this structure type.            |
| HIKData(HIKData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| reachT | number |             |
| reachR | number |             |
| pull   | number |             |
| resist | number |             |

## Methods

| Type               | Name            | Parameters |
| ------------------ | --------------- | ---------- |
| [HIKData](/vext/ref/fb/hikdata/) | [Clone](#clone) |            |

### Clone

> [HIKData](/vext/ref/fb/hikdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
