---
title: IndexRange
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| IndexRange()                 | Create a new instance of this structure type.            |
| IndexRange(IndexRange other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| first | number |             |
| last  | number |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [IndexRange](IndexRange) | [Clone](#clone) |            |

### Clone

> [IndexRange](IndexRange) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
