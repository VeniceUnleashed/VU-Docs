---
title: FloatRange
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| FloatRange()                 | Create a new instance of this structure type.            |
| FloatRange(FloatRange other) | Create a reference copy of a structure of the same type. |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| min  | number |             |
| max  | number |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [FloatRange](FloatRange) | [Clone](#clone) |            |

### Clone

> [FloatRange](FloatRange) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
