---
title: UIPopupButton (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| UIPopupButton()                    | Create a new instance of this structure type.            |
| UIPopupButton(UIPopupButton other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type                           | Description |
| ------------ | ------------------------------ | ----------- |
| inputConcept | [UIInputAction](UIInputAction) |             |
| label        | string                         |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [UIPopupButton](UIPopupButton) | [Clone](#clone) |            |

### Clone

> [UIPopupButton](UIPopupButton) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
