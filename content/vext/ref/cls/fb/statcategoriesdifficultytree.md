---
title: StatCategoriesDifficultyTree (Frostbite Container)
---
### Base Classes

[StatCategoriesGuidTree](StatCategoriesGuidTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesDifficultyTree()                                                          | Create a new instance of this container type.                                                                                                   |
| StatCategoriesDifficultyTree(StatCategoriesDifficultyTree other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| StatCategoriesDifficultyTree([StatCategoriesGuidTree](StatCategoriesGuidTree) other)    | Upcast an instance of type [StatCategoriesGuidTree](StatCategoriesGuidTree) to [StatCategoriesDifficultyTree](StatCategoriesDifficultyTree).    |
| StatCategoriesDifficultyTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesDifficultyTree](StatCategoriesDifficultyTree).    |
| StatCategoriesDifficultyTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesDifficultyTree](StatCategoriesDifficultyTree).                                |
| StatCategoriesDifficultyTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesDifficultyTree](StatCategoriesDifficultyTree).                                      |
| StatCategoriesDifficultyTree([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatCategoriesDifficultyTree](StatCategoriesDifficultyTree). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesDifficultyTree](StatCategoriesDifficultyTree) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatCategoriesDifficultyTree](StatCategoriesDifficultyTree) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
