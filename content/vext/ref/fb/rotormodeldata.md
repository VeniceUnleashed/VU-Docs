---
title: RotorModelData
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
| [RotorModelData](/vext/ref/fb/rotormodeldata/) | [Clone](#clone) |            |

### Clone

> [RotorModelData](/vext/ref/fb/rotormodeldata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
