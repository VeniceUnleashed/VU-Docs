---
title: UIPopupTextInput
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| UIPopupTextInput()                       | Create a new instance of this structure type.            |
| UIPopupTextInput(UIPopupTextInput other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| id           | string |             |
| label        | string |             |
| defaultValue | string |             |
| isPassword   | bool   |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [UIPopupTextInput](/vext/ref/fb/uipopuptextinput/) | [Clone](#clone) |            |

### Clone

> [UIPopupTextInput](/vext/ref/fb/uipopuptextinput/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
