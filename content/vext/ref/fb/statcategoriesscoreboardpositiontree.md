---
title: StatCategoriesScoreboardPositionTree
---
### Base Classes

[StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesScoreboardPositionTree()                                                          | Create a new instance of this container type.                                                                                                                   |
| StatCategoriesScoreboardPositionTree(StatCategoriesScoreboardPositionTree other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| StatCategoriesScoreboardPositionTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesScoreboardPositionTree](/vext/ref/fb/statcategoriesscoreboardpositiontree/).    |
| StatCategoriesScoreboardPositionTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesScoreboardPositionTree](/vext/ref/fb/statcategoriesscoreboardpositiontree/).                                |
| StatCategoriesScoreboardPositionTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesScoreboardPositionTree](/vext/ref/fb/statcategoriesscoreboardpositiontree/).                                      |
| StatCategoriesScoreboardPositionTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesScoreboardPositionTree](/vext/ref/fb/statcategoriesscoreboardpositiontree/). |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesScoreboardPositionTree](/vext/ref/fb/statcategoriesscoreboardpositiontree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesScoreboardPositionTree](/vext/ref/fb/statcategoriesscoreboardpositiontree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
