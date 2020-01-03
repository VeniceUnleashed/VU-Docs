---
title: AntEventData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                      | Description                                              |
| -------------------------------- | -------------------------------------------------------- |
| AntEventData()                   | Create a new instance of this structure type.            |
| AntEventData(AntEventData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type                   | Description |
| ----- | ---------------------- | ----------- |
| tagId | number                 |             |
| event | [EventSpec](/vext/ref/fb/eventspec/) |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [AntEventData](/vext/ref/fb/anteventdata/) | [Clone](#clone) |            |

### Clone

> [AntEventData](/vext/ref/fb/anteventdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
