---
title: InputSuppressionData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| InputSuppressionData()                           | Create a new instance of this structure type.            |
| InputSuppressionData(InputSuppressionData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                 | Type                                     | Description |
| -------------------- | ---------------------------------------- | ----------- |
| suppressVehicleInput | [ActionSuppressor](ActionSuppressor)\[\] |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [InputSuppressionData](InputSuppressionData) | [Clone](#clone) |            |

### Clone

> [InputSuppressionData](InputSuppressionData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
