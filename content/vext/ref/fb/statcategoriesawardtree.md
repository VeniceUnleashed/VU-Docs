---
title: StatCategoriesAwardTree
---
### Base Classes

[StatCategoriesGuidTree](StatCategoriesGuidTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesAwardTree()                                                          | Create a new instance of this container type.                                                                                         |
| StatCategoriesAwardTree(StatCategoriesAwardTree other)                             | Create a reference copy of an instance of the same type.                                                                              |
| StatCategoriesAwardTree([StatCategoriesGuidTree](StatCategoriesGuidTree) other)    | Upcast an instance of type [StatCategoriesGuidTree](StatCategoriesGuidTree) to [StatCategoriesAwardTree](StatCategoriesAwardTree).    |
| StatCategoriesAwardTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesAwardTree](StatCategoriesAwardTree).    |
| StatCategoriesAwardTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesAwardTree](StatCategoriesAwardTree).                                |
| StatCategoriesAwardTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesAwardTree](StatCategoriesAwardTree).                                      |
| StatCategoriesAwardTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesAwardTree](StatCategoriesAwardTree). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesAwardTree](StatCategoriesAwardTree) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesAwardTree](StatCategoriesAwardTree) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
