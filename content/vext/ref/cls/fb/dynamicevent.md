---
title: DynamicEvent (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                      | Description                                              |
| -------------------------------- | -------------------------------------------------------- |
| DynamicEvent()                   | Create a new instance of this structure type.            |
| DynamicEvent(DynamicEvent other) | Create a reference copy of a structure of the same type. |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| id   | number |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [DynamicEvent](DynamicEvent) | [Clone](#clone) |            |

### Clone

> [DynamicEvent](DynamicEvent) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
