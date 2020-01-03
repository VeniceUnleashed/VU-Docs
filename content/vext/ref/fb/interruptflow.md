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
| interruptEnum | [UIInterruptID](/vext/ref/fb/uiinterruptid/) |             |
| interruptFlow | [UIGraphAsset](/vext/ref/fb/uigraphasset/)   |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [InterruptFlow](/vext/ref/fb/interruptflow/) | [Clone](#clone) |            |

### Clone

> [InterruptFlow](/vext/ref/fb/interruptflow/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
