---
title: UIListItem
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
| isEnabled        | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| isVisible        | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| toggleItems      | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| dataUpdate       | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| defaultIsVisible | bool                                 |             |
| defaultIsEnabled | bool                                 |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [UIListItem](/vext/ref/fb/uilistitem/) | [Clone](#clone) |            |

### Clone

> [UIListItem](/vext/ref/fb/uilistitem/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
