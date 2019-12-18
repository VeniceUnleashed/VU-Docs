---
title: MessageInfo (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                    | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| MessageInfo()                  | Create a new instance of this structure type.            |
| MessageInfo(MessageInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| rowTypeName       | string |             |
| messageQueueSize  | number |             |
| normalMessageTime | number |             |
| shortMessageTime  | number |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [MessageInfo](MessageInfo) | [Clone](#clone) |            |

### Clone

> [MessageInfo](MessageInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
