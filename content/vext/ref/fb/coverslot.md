---
title: CoverSlot
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| CoverSlot()                | Create a new instance of this structure type.            |
| CoverSlot(CoverSlot other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| position | [Vec3](/vext/ref/shared/class/Vec3) |             |

## Methods

| Type                   | Name            | Parameters |
| ---------------------- | --------------- | ---------- |
| [CoverSlot](CoverSlot) | [Clone](#clone) |            |

### Clone

> [CoverSlot](CoverSlot) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
