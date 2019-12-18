---
title: UIButton (Frostbite Structure)
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
| [UIButton](UIButton) | [Clone](#clone) |            |

### Clone

> [UIButton](UIButton) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
