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
| textType | [UICreditsTextType](UICreditsTextType) |             |
| text     | string                                 |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [UICreditsLine](UICreditsLine) | [Clone](#clone) |            |

### Clone

> [UICreditsLine](UICreditsLine) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
