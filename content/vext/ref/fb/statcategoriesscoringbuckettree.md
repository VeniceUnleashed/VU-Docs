---
title: StatCategoriesScoringBucketTree
---
### Base Classes

[StatCategoriesGuidTree](StatCategoriesGuidTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesScoringBucketTree()                                                          | Create a new instance of this container type.                                                                                                         |
| StatCategoriesScoringBucketTree(StatCategoriesScoringBucketTree other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| StatCategoriesScoringBucketTree([StatCategoriesGuidTree](StatCategoriesGuidTree) other)    | Upcast an instance of type [StatCategoriesGuidTree](StatCategoriesGuidTree) to [StatCategoriesScoringBucketTree](StatCategoriesScoringBucketTree).    |
| StatCategoriesScoringBucketTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesScoringBucketTree](StatCategoriesScoringBucketTree).    |
| StatCategoriesScoringBucketTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesScoringBucketTree](StatCategoriesScoringBucketTree).                                |
| StatCategoriesScoringBucketTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesScoringBucketTree](StatCategoriesScoringBucketTree).                                      |
| StatCategoriesScoringBucketTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesScoringBucketTree](StatCategoriesScoringBucketTree). |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesScoringBucketTree](StatCategoriesScoringBucketTree) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesScoringBucketTree](StatCategoriesScoringBucketTree) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
