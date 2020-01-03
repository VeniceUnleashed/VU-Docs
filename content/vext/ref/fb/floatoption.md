---
title: FloatOption
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                    | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| FloatOption()                  | Create a new instance of this structure type.            |
| FloatOption(FloatOption other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| name  | string |             |
| value | number |             |
| min   | number |             |
| max   | number |             |
| step  | number |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [FloatOption](/vext/ref/fb/floatoption/) | [Clone](#clone) |            |

### Clone

> [FloatOption](/vext/ref/fb/floatoption/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
