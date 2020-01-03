---
title: StatCategoriesKitTree
---
### Base Classes

[StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesKitTree()                                                          | Create a new instance of this container type.                                                                                     |
| StatCategoriesKitTree(StatCategoriesKitTree other)                               | Create a reference copy of an instance of the same type.                                                                          |
| StatCategoriesKitTree([StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) other)    | Upcast an instance of type [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) to [StatCategoriesKitTree](/vext/ref/fb/statcategorieskittree/).    |
| StatCategoriesKitTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesKitTree](/vext/ref/fb/statcategorieskittree/).    |
| StatCategoriesKitTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesKitTree](/vext/ref/fb/statcategorieskittree/).                                |
| StatCategoriesKitTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesKitTree](/vext/ref/fb/statcategorieskittree/).                                      |
| StatCategoriesKitTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesKitTree](/vext/ref/fb/statcategorieskittree/). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesKitTree](/vext/ref/fb/statcategorieskittree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesKitTree](/vext/ref/fb/statcategorieskittree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
