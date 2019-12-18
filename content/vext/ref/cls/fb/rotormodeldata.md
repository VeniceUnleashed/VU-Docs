---
title: RotorModelData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| RotorModelData()                     | Create a new instance of this structure type.            |
| RotorModelData(RotorModelData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| rotationRpm | number |             |
| partIndex   | number |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [RotorModelData](RotorModelData) | [Clone](#clone) |            |

### Clone

> [RotorModelData](RotorModelData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
