---
title: DataField (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| DataField()                | Create a new instance of this structure type.            |
| DataField(DataField other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type                                                | Description |
| ---------- | --------------------------------------------------- | ----------- |
| value      | string                                              |             |
| valueRef   | [DataContainer](/vext/ref/cls/shr/DataContainer) |             |
| id         | number                                              |             |
| accessType | [FieldAccessType](FieldAccessType)                  |             |

## Methods

| Type                   | Name            | Parameters |
| ---------------------- | --------------- | ---------- |
| [DataField](DataField) | [Clone](#clone) |            |

### Clone

> [DataField](DataField) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
