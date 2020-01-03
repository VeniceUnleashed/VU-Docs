---
title: UIButton
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor              | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| UIButton()               | Create a new instance of this structure type.            |
| UIButton(UIButton other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| buttonLabel | string |             |
| buttonId    | string |             |
| isPremium   | bool   |             |

## Methods

| Type                 | Name            | Parameters |
| -------------------- | --------------- | ---------- |
| [UIButton](/vext/ref/fb/uibutton/) | [Clone](#clone) |            |

### Clone

> [UIButton](/vext/ref/fb/uibutton/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
