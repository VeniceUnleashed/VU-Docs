---
title: AwardStatus
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                    | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| AwardStatus()                  | Create a new instance of this structure type.            |
| AwardStatus(AwardStatus other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                               | Description |
| ------------- | ---------------------------------- | ----------- |
| code          | string                             |             |
| currentValue  | number                             |             |
| originalValue | number                             |             |
| counters      | [CounterStatus](/vext/ref/fb/counterstatus/)\[\] |             |
| isCounting    | bool                               |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [AwardStatus](/vext/ref/fb/awardstatus/) | [Clone](#clone) |            |

### Clone

> [AwardStatus](/vext/ref/fb/awardstatus/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
