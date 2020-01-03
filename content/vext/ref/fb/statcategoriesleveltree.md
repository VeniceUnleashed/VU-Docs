---
title: StatCategoriesLevelTree
---
### Base Classes

[StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesLevelTree()                                                          | Create a new instance of this container type.                                                                                         |
| StatCategoriesLevelTree(StatCategoriesLevelTree other)                             | Create a reference copy of an instance of the same type.                                                                              |
| StatCategoriesLevelTree([StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) other)    | Upcast an instance of type [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) to [StatCategoriesLevelTree](/vext/ref/fb/statcategoriesleveltree/).    |
| StatCategoriesLevelTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesLevelTree](/vext/ref/fb/statcategoriesleveltree/).    |
| StatCategoriesLevelTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesLevelTree](/vext/ref/fb/statcategoriesleveltree/).                                |
| StatCategoriesLevelTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesLevelTree](/vext/ref/fb/statcategoriesleveltree/).                                      |
| StatCategoriesLevelTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesLevelTree](/vext/ref/fb/statcategoriesleveltree/). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesLevelTree](/vext/ref/fb/statcategoriesleveltree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesLevelTree](/vext/ref/fb/statcategoriesleveltree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
