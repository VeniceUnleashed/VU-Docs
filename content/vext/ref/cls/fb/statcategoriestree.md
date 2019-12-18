---
title: StatCategoriesTree (Frostbite Container)
---
### Base Classes

[StatCategoriesBaseTree](StatCategoriesBaseTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesTree()                                                          | Create a new instance of this container type.                                                                               |
| StatCategoriesTree(StatCategoriesTree other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| StatCategoriesTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesTree](StatCategoriesTree).    |
| StatCategoriesTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesTree](StatCategoriesTree).                                |
| StatCategoriesTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesTree](StatCategoriesTree).                                      |
| StatCategoriesTree([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatCategoriesTree](StatCategoriesTree). |

## Properties

| Name       | Type                                       | Description |
| ---------- | ------------------------------------------ | ----------- |
| categories | [StatsCategoryData](StatsCategoryData)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesTree](StatCategoriesTree) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatCategoriesTree](StatCategoriesTree) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
