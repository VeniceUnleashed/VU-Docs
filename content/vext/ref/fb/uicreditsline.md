---
title: UICreditsLine
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| UICreditsLine()                    | Create a new instance of this structure type.            |
| UICreditsLine(UICreditsLine other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                                   | Description |
| -------- | -------------------------------------- | ----------- |
| textType | [UICreditsTextType](/vext/ref/fb/uicreditstexttype/) |             |
| text     | string                                 |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [UICreditsLine](/vext/ref/fb/uicreditsline/) | [Clone](#clone) |            |

### Clone

> [UICreditsLine](/vext/ref/fb/uicreditsline/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
