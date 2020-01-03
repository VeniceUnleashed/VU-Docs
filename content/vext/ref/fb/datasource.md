---
title: DataSource
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| DataSource()                 | Create a new instance of this structure type.            |
| DataSource(DataSource other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                               | Description |
| -------- | ---------------------------------- | ----------- |
| category | [UIComponentData](UIComponentData) |             |
| value    | number                             |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [DataSource](DataSource) | [Clone](#clone) |            |

### Clone

> [DataSource](DataSource) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
