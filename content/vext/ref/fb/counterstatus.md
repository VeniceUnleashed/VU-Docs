---
title: CounterStatus
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| CounterStatus()                    | Create a new instance of this structure type.            |
| CounterStatus(CounterStatus other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| currentValue  | number |             |
| originalValue | number |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [CounterStatus](/vext/ref/fb/counterstatus/) | [Clone](#clone) |            |

### Clone

> [CounterStatus](/vext/ref/fb/counterstatus/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
