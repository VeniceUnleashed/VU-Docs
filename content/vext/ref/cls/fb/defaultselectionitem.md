---
title: DefaultSelectionItem (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| DefaultSelectionItem()                           | Create a new instance of this structure type.            |
| DefaultSelectionItem(DefaultSelectionItem other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                  | Type                                 | Description |
| --------------------- | ------------------------------------ | ----------- |
| defaultSelectionQuery | [UIDataSourceInfo](UIDataSourceInfo) |             |
| defaultSelectionIndex | number                               |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [DefaultSelectionItem](DefaultSelectionItem) | [Clone](#clone) |            |

### Clone

> [DefaultSelectionItem](DefaultSelectionItem) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
