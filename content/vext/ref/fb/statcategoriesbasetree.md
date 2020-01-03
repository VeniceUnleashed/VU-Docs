---
title: StatCategoriesBaseTree
---
### Base Classes

[TreeBase](/vext/ref/fb/treebase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesBaseTree()                                                          | Create a new instance of this container type.                                                                                       |
| StatCategoriesBaseTree(StatCategoriesBaseTree other)                              | Create a reference copy of an instance of the same type.                                                                            |
| StatCategoriesBaseTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/).                                |
| StatCategoriesBaseTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/).                                      |
| StatCategoriesBaseTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/). |

## Properties

| Name                   | Type                                               | Description |
| ---------------------- | -------------------------------------------------- | ----------- |
| rootBaseCategories     | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/)\[\] |             |
| paramX                 | [CriteriaData](/vext/ref/fb/criteriadata/)\[\]                   |             |
| paramY                 | [CriteriaData](/vext/ref/fb/criteriadata/)\[\]                   |             |
| processAllLevelsInTree | bool                                               |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
