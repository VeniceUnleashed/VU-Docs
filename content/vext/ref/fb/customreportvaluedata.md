---
title: CustomReportValueData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| CustomReportValueData()                            | Create a new instance of this structure type.            |
| CustomReportValueData(CustomReportValueData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                                               | Description |
| -------- | -------------------------------------------------- | ----------- |
| name     | string                                             |             |
| kind     | [CustomReportValueKind](CustomReportValueKind)     |             |
| dataType | [PersistentValueDataType](PersistentValueDataType) |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [CustomReportValueData](CustomReportValueData) | [Clone](#clone) |            |

### Clone

> [CustomReportValueData](CustomReportValueData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
