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
| suppressVehicleInput | [ActionSuppressor](/vext/ref/fb/actionsuppressor/)\[\] |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [InputSuppressionData](/vext/ref/fb/inputsuppressiondata/) | [Clone](#clone) |            |

### Clone

> [InputSuppressionData](/vext/ref/fb/inputsuppressiondata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
