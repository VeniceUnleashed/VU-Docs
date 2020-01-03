---
title: StatCategoriesTree
---
### Base Classes

[StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesTree()                                                          | Create a new instance of this container type.                                                                               |
| StatCategoriesTree(StatCategoriesTree other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| StatCategoriesTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesTree](/vext/ref/fb/statcategoriestree/).    |
| StatCategoriesTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesTree](/vext/ref/fb/statcategoriestree/).                                |
| StatCategoriesTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesTree](/vext/ref/fb/statcategoriestree/).                                      |
| StatCategoriesTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesTree](/vext/ref/fb/statcategoriestree/). |

## Properties

| Name       | Type                                       | Description |
| ---------- | ------------------------------------------ | ----------- |
| categories | [StatsCategoryData](/vext/ref/fb/statscategorydata/)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesTree](/vext/ref/fb/statcategoriestree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesTree](/vext/ref/fb/statcategoriestree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
