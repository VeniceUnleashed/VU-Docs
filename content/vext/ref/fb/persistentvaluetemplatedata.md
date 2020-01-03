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
| valueType         | [PersistentValueType](/vext/ref/fb/persistentvaluetype/)               |             |
| dataType          | [PersistentValueDataType](/vext/ref/fb/persistentvaluedatatype/)       |             |
| historyType       | [PersistentValueHistoryType](/vext/ref/fb/persistentvaluehistorytype/) |             |
| group             | [AwardGroup](/vext/ref/fb/awardgroup/)                                 |             |
| clubStat          | bool                                                     |             |
| forceIntoTemplate | bool                                                     |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata/) | [Clone](#clone) |            |

### Clone

> [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
