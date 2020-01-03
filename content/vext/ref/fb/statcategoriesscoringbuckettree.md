---
title: StatCategoriesScoringBucketTree
---
### Base Classes

[StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesScoringBucketTree()                                                          | Create a new instance of this container type.                                                                                                         |
| StatCategoriesScoringBucketTree(StatCategoriesScoringBucketTree other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| StatCategoriesScoringBucketTree([StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) other)    | Upcast an instance of type [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) to [StatCategoriesScoringBucketTree](/vext/ref/fb/statcategoriesscoringbuckettree/).    |
| StatCategoriesScoringBucketTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesScoringBucketTree](/vext/ref/fb/statcategoriesscoringbuckettree/).    |
| StatCategoriesScoringBucketTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesScoringBucketTree](/vext/ref/fb/statcategoriesscoringbuckettree/).                                |
| StatCategoriesScoringBucketTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesScoringBucketTree](/vext/ref/fb/statcategoriesscoringbuckettree/).                                      |
| StatCategoriesScoringBucketTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesScoringBucketTree](/vext/ref/fb/statcategoriesscoringbuckettree/). |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesScoringBucketTree](/vext/ref/fb/statcategoriesscoringbuckettree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesScoringBucketTree](/vext/ref/fb/statcategoriesscoringbuckettree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
