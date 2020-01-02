---
title: PersistentValueTemplateData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| PersistentValueTemplateData()                                  | Create a new instance of this structure type.            |
| PersistentValueTemplateData(PersistentValueTemplateData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type                                                     | Description |
| ----------------- | -------------------------------------------------------- | ----------- |
| name              | string                                                   |             |
| defaultValue      | string                                                   |             |
| defaultFloatValue | number                                                   |             |
| defaultIntValue   | number                                                   |             |
| valueType         | [PersistentValueType](PersistentValueType)               |             |
| dataType          | [PersistentValueDataType](PersistentValueDataType)       |             |
| historyType       | [PersistentValueHistoryType](PersistentValueHistoryType) |             |
| group             | [AwardGroup](AwardGroup)                                 |             |
| clubStat          | bool                                                     |             |
| forceIntoTemplate | bool                                                     |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [PersistentValueTemplateData](PersistentValueTemplateData) | [Clone](#clone) |            |

### Clone

> [PersistentValueTemplateData](PersistentValueTemplateData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
