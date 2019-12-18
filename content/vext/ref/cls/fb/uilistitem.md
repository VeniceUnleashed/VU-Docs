---
title: UIListItem (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| UIListItem()                 | Create a new instance of this structure type.            |
| UIListItem(UIListItem other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| label            | string                               |             |
| isEnabled        | [UIDataSourceInfo](UIDataSourceInfo) |             |
| isVisible        | [UIDataSourceInfo](UIDataSourceInfo) |             |
| toggleItems      | [UIDataSourceInfo](UIDataSourceInfo) |             |
| dataUpdate       | [UIDataSourceInfo](UIDataSourceInfo) |             |
| defaultIsVisible | bool                                 |             |
| defaultIsEnabled | bool                                 |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [UIListItem](UIListItem) | [Clone](#clone) |            |

### Clone

> [UIListItem](UIListItem) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
