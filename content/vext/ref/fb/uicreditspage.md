---
title: UICreditsPage
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| UICreditsPage()                    | Create a new instance of this structure type.            |
| UICreditsPage(UICreditsPage other) | Create a reference copy of a structure of the same type. |

## Properties

| Name    | Type                               | Description |
| ------- | ---------------------------------- | ----------- |
| header1 | string                             |             |
| header2 | string                             |             |
| lines   | [UICreditsLine](UICreditsLine)\[\] |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [UICreditsPage](UICreditsPage) | [Clone](#clone) |            |

### Clone

> [UICreditsPage](UICreditsPage) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
