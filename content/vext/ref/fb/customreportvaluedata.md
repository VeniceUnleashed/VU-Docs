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
| kind     | [CustomReportValueKind](/vext/ref/fb/customreportvaluekind/)     |             |
| dataType | [PersistentValueDataType](/vext/ref/fb/persistentvaluedatatype/) |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [CustomReportValueData](/vext/ref/fb/customreportvaluedata/) | [Clone](#clone) |            |

### Clone

> [CustomReportValueData](/vext/ref/fb/customreportvaluedata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
