---
title: StatCategoriesLevelTree
---
### Base Classes

[StatCategoriesGuidTree](StatCategoriesGuidTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesLevelTree()                                                          | Create a new instance of this container type.                                                                                         |
| StatCategoriesLevelTree(StatCategoriesLevelTree other)                             | Create a reference copy of an instance of the same type.                                                                              |
| StatCategoriesLevelTree([StatCategoriesGuidTree](StatCategoriesGuidTree) other)    | Upcast an instance of type [StatCategoriesGuidTree](StatCategoriesGuidTree) to [StatCategoriesLevelTree](StatCategoriesLevelTree).    |
| StatCategoriesLevelTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesLevelTree](StatCategoriesLevelTree).    |
| StatCategoriesLevelTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesLevelTree](StatCategoriesLevelTree).                                |
| StatCategoriesLevelTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesLevelTree](StatCategoriesLevelTree).                                      |
| StatCategoriesLevelTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesLevelTree](StatCategoriesLevelTree). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesLevelTree](StatCategoriesLevelTree) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesLevelTree](StatCategoriesLevelTree) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
