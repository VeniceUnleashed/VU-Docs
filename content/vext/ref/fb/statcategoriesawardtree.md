---
title: StatCategoriesAwardTree
---
### Base Classes

[StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesAwardTree()                                                          | Create a new instance of this container type.                                                                                         |
| StatCategoriesAwardTree(StatCategoriesAwardTree other)                             | Create a reference copy of an instance of the same type.                                                                              |
| StatCategoriesAwardTree([StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) other)    | Upcast an instance of type [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) to [StatCategoriesAwardTree](/vext/ref/fb/statcategoriesawardtree/).    |
| StatCategoriesAwardTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesAwardTree](/vext/ref/fb/statcategoriesawardtree/).    |
| StatCategoriesAwardTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesAwardTree](/vext/ref/fb/statcategoriesawardtree/).                                |
| StatCategoriesAwardTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesAwardTree](/vext/ref/fb/statcategoriesawardtree/).                                      |
| StatCategoriesAwardTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesAwardTree](/vext/ref/fb/statcategoriesawardtree/). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesAwardTree](/vext/ref/fb/statcategoriesawardtree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesAwardTree](/vext/ref/fb/statcategoriesawardtree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
