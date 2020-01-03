---
title: StatCategoriesGuidTree
---
### Base Classes

[StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesGuidTree()                                                          | Create a new instance of this container type.                                                                                       |
| StatCategoriesGuidTree(StatCategoriesGuidTree other)                              | Create a reference copy of an instance of the same type.                                                                            |
| StatCategoriesGuidTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/).    |
| StatCategoriesGuidTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/).                                |
| StatCategoriesGuidTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/).                                      |
| StatCategoriesGuidTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
