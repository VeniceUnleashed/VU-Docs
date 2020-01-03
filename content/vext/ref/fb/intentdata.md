---
title: IntentData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| IntentData()                 | Create a new instance of this structure type.            |
| IntentData(IntentData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| name            | string |             |
| defaultModifier | number |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [IntentData](IntentData) | [Clone](#clone) |            |

### Clone

> [IntentData](IntentData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
