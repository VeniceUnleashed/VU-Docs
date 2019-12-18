---
title: StatCategoriesBaseTree (Frostbite Container)
---
### Base Classes

[TreeBase](TreeBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesBaseTree()                                                          | Create a new instance of this container type.                                                                                       |
| StatCategoriesBaseTree(StatCategoriesBaseTree other)                              | Create a reference copy of an instance of the same type.                                                                            |
| StatCategoriesBaseTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesBaseTree](StatCategoriesBaseTree).                                |
| StatCategoriesBaseTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesBaseTree](StatCategoriesBaseTree).                                      |
| StatCategoriesBaseTree([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatCategoriesBaseTree](StatCategoriesBaseTree). |

## Properties

| Name                   | Type                                               | Description |
| ---------------------- | -------------------------------------------------- | ----------- |
| rootBaseCategories     | [StatsCategoryBaseData](StatsCategoryBaseData)\[\] |             |
| paramX                 | [CriteriaData](CriteriaData)\[\]                   |             |
| paramY                 | [CriteriaData](CriteriaData)\[\]                   |             |
| processAllLevelsInTree | bool                                               |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesBaseTree](StatCategoriesBaseTree) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatCategoriesBaseTree](StatCategoriesBaseTree) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
