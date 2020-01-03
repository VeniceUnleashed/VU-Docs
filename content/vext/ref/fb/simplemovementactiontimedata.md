---
title: SimpleMovementActionTimeData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| SimpleMovementActionTimeData()                                   | Create a new instance of this structure type.            |
| SimpleMovementActionTimeData(SimpleMovementActionTimeData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| time         | number |             |
| maxVariation | number |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [SimpleMovementActionTimeData](SimpleMovementActionTimeData) | [Clone](#clone) |            |

### Clone

> [SimpleMovementActionTimeData](SimpleMovementActionTimeData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
