---
title: CriteriaStarCategoryInstance
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| CriteriaStarCategoryInstance()                                   | Create a new instance of this structure type.            |
| CriteriaStarCategoryInstance(CriteriaStarCategoryInstance other) | Create a reference copy of a structure of the same type. |

## Properties

| Name   | Type                                           | Description |
| ------ | ---------------------------------------------- | ----------- |
| name   | string                                         |             |
| paramX | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) |             |
| paramY | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance/) | [Clone](#clone) |            |

### Clone

> [CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
