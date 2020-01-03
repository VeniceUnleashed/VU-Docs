---
title: StringOption
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                      | Description                                              |
| -------------------------------- | -------------------------------------------------------- |
| StringOption()                   | Create a new instance of this structure type.            |
| StringOption(StringOption other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| name  | string |             |
| value | string |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [StringOption](StringOption) | [Clone](#clone) |            |

### Clone

> [StringOption](StringOption) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
