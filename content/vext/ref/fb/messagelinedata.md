---
title: MessageLineData
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
| entryInputAction | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [MessageLineData](/vext/ref/fb/messagelinedata/) | [Clone](#clone) |            |

### Clone

> [MessageLineData](/vext/ref/fb/messagelinedata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
