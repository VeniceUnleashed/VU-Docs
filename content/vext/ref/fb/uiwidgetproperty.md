---
title: UIWidgetProperty
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| UIWidgetProperty()                       | Create a new instance of this structure type.            |
| UIWidgetProperty(UIWidgetProperty other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| name  | string |             |
| value | string |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [UIWidgetProperty](UIWidgetProperty) | [Clone](#clone) |            |

### Clone

> [UIWidgetProperty](UIWidgetProperty) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
