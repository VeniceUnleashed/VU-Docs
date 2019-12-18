---
title: UIButtonSet (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                    | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| UIButtonSet()                  | Create a new instance of this structure type.            |
| UIButtonSet(UIButtonSet other) | Create a reference copy of a structure of the same type. |

## Properties

| Name    | Type                     | Description |
| ------- | ------------------------ | ----------- |
| buttons | [UIButton](UIButton)\[\] |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [UIButtonSet](UIButtonSet) | [Clone](#clone) |            |

### Clone

> [UIButtonSet](UIButtonSet) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
