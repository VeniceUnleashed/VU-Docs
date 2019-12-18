---
title: StatCategoriesGuidTree (Frostbite Container)
---
### Base Classes

[StatCategoriesBaseTree](StatCategoriesBaseTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesGuidTree()                                                          | Create a new instance of this container type.                                                                                       |
| StatCategoriesGuidTree(StatCategoriesGuidTree other)                              | Create a reference copy of an instance of the same type.                                                                            |
| StatCategoriesGuidTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesGuidTree](StatCategoriesGuidTree).    |
| StatCategoriesGuidTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesGuidTree](StatCategoriesGuidTree).                                |
| StatCategoriesGuidTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesGuidTree](StatCategoriesGuidTree).                                      |
| StatCategoriesGuidTree([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatCategoriesGuidTree](StatCategoriesGuidTree). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesGuidTree](StatCategoriesGuidTree) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatCategoriesGuidTree](StatCategoriesGuidTree) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
