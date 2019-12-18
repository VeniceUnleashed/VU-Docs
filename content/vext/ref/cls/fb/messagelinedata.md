---
title: MessageLineData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| MessageLineData()                      | Create a new instance of this structure type.            |
| MessageLineData(MessageLineData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type                                         | Description |
| ---------------- | -------------------------------------------- | ----------- |
| messageSid       | string                                       |             |
| entryInputAction | [EntryInputActionEnum](EntryInputActionEnum) |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [MessageLineData](MessageLineData) | [Clone](#clone) |            |

### Clone

> [MessageLineData](MessageLineData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
