---
title: UIFontMapping
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| UIFontMapping()                    | Create a new instance of this structure type.            |
| UIFontMapping(UIFontMapping other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type       | Description |
| ----------------- | ---------- | ----------- |
| scaleformFontName | string\[\] |             |
| fontLongName      | string     |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [UIFontMapping](UIFontMapping) | [Clone](#clone) |            |

### Clone

> [UIFontMapping](UIFontMapping) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
