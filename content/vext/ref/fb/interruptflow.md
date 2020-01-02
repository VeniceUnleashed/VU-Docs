---
title: InterruptFlow
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| InterruptFlow()                    | Create a new instance of this structure type.            |
| InterruptFlow(InterruptFlow other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                           | Description |
| ------------- | ------------------------------ | ----------- |
| interruptEnum | [UIInterruptID](UIInterruptID) |             |
| interruptFlow | [UIGraphAsset](UIGraphAsset)   |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [InterruptFlow](InterruptFlow) | [Clone](#clone) |            |

### Clone

> [InterruptFlow](InterruptFlow) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
