---
title: ValueAtX (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor              | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| ValueAtX()               | Create a new instance of this structure type.            |
| ValueAtX(ValueAtX other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| x     | number |             |
| value | number |             |

## Methods

| Type                 | Name            | Parameters |
| -------------------- | --------------- | ---------- |
| [ValueAtX](ValueAtX) | [Clone](#clone) |            |

### Clone

> [ValueAtX](ValueAtX) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
