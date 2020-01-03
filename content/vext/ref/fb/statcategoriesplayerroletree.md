---
title: StatCategoriesPlayerRoleTree
---
### Base Classes

[StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesPlayerRoleTree()                                                          | Create a new instance of this container type.                                                                                                   |
| StatCategoriesPlayerRoleTree(StatCategoriesPlayerRoleTree other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| StatCategoriesPlayerRoleTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesPlayerRoleTree](/vext/ref/fb/statcategoriesplayerroletree/).    |
| StatCategoriesPlayerRoleTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesPlayerRoleTree](/vext/ref/fb/statcategoriesplayerroletree/).                                |
| StatCategoriesPlayerRoleTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesPlayerRoleTree](/vext/ref/fb/statcategoriesplayerroletree/).                                      |
| StatCategoriesPlayerRoleTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesPlayerRoleTree](/vext/ref/fb/statcategoriesplayerroletree/). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesPlayerRoleTree](/vext/ref/fb/statcategoriesplayerroletree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesPlayerRoleTree](/vext/ref/fb/statcategoriesplayerroletree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
