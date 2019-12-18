---
title: BurstLimit (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| BurstLimit()                 | Create a new instance of this structure type.            |
| BurstLimit(BurstLimit other) | Create a reference copy of a structure of the same type. |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| min  | number |             |
| max  | number |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [BurstLimit](BurstLimit) | [Clone](#clone) |            |

### Clone

> [BurstLimit](BurstLimit) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
