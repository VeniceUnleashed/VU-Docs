---
title: StatCategoriesScoreboardPositionTree
---
### Base Classes

[StatCategoriesBaseTree](StatCategoriesBaseTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesScoreboardPositionTree()                                                          | Create a new instance of this container type.                                                                                                                   |
| StatCategoriesScoreboardPositionTree(StatCategoriesScoreboardPositionTree other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| StatCategoriesScoreboardPositionTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesScoreboardPositionTree](StatCategoriesScoreboardPositionTree).    |
| StatCategoriesScoreboardPositionTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesScoreboardPositionTree](StatCategoriesScoreboardPositionTree).                                |
| StatCategoriesScoreboardPositionTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesScoreboardPositionTree](StatCategoriesScoreboardPositionTree).                                      |
| StatCategoriesScoreboardPositionTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesScoreboardPositionTree](StatCategoriesScoreboardPositionTree). |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesScoreboardPositionTree](StatCategoriesScoreboardPositionTree) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesScoreboardPositionTree](StatCategoriesScoreboardPositionTree) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
