---
title: StatCategoriesKitTree (Frostbite Container)
---
### Base Classes

[StatCategoriesGuidTree](StatCategoriesGuidTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesKitTree()                                                          | Create a new instance of this container type.                                                                                     |
| StatCategoriesKitTree(StatCategoriesKitTree other)                               | Create a reference copy of an instance of the same type.                                                                          |
| StatCategoriesKitTree([StatCategoriesGuidTree](StatCategoriesGuidTree) other)    | Upcast an instance of type [StatCategoriesGuidTree](StatCategoriesGuidTree) to [StatCategoriesKitTree](StatCategoriesKitTree).    |
| StatCategoriesKitTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesKitTree](StatCategoriesKitTree).    |
| StatCategoriesKitTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesKitTree](StatCategoriesKitTree).                                |
| StatCategoriesKitTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesKitTree](StatCategoriesKitTree).                                      |
| StatCategoriesKitTree([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatCategoriesKitTree](StatCategoriesKitTree). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesKitTree](StatCategoriesKitTree) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatCategoriesKitTree](StatCategoriesKitTree) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
