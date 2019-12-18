---
title: UIDataSourceInfo (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| UIDataSourceInfo()                       | Create a new instance of this structure type.            |
| UIDataSourceInfo(UIDataSourceInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type                               | Description |
| ------------------ | ---------------------------------- | ----------- |
| dataName           | string                             |             |
| dataCategory       | [UIComponentData](UIComponentData) |             |
| dataKey            | number                             |             |
| useDirectAccess    | bool                               |             |
| updateOnInitialize | bool                               |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [UIDataSourceInfo](UIDataSourceInfo) | [Clone](#clone) |            |

### Clone

> [UIDataSourceInfo](UIDataSourceInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
