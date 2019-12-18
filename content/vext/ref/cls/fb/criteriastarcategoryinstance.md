---
title: CriteriaStarCategoryInstance (Frostbite Structure)
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
| paramX | [StatsCategoryBaseData](StatsCategoryBaseData) |             |
| paramY | [StatsCategoryBaseData](StatsCategoryBaseData) |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [CriteriaStarCategoryInstance](CriteriaStarCategoryInstance) | [Clone](#clone) |            |

### Clone

> [CriteriaStarCategoryInstance](CriteriaStarCategoryInstance) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
