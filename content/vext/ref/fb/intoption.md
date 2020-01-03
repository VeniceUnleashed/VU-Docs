---
title: IntOption
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| IntOption()                | Create a new instance of this structure type.            |
| IntOption(IntOption other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| name  | string |             |
| value | number |             |

## Methods

| Type                   | Name            | Parameters |
| ---------------------- | --------------- | ---------- |
| [IntOption](IntOption) | [Clone](#clone) |            |

### Clone

> [IntOption](IntOption) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
