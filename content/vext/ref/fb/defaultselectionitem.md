---
title: DefaultSelectionItem
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
| defaultSelectionQuery | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| defaultSelectionIndex | number                               |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem/) | [Clone](#clone) |            |

### Clone

> [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
