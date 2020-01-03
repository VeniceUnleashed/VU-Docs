---
title: StatCategoriesWeaponAccessoryTree
---
### Base Classes

[StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesWeaponAccessoryTree()                                                          | Create a new instance of this container type.                                                                                                             |
| StatCategoriesWeaponAccessoryTree(StatCategoriesWeaponAccessoryTree other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| StatCategoriesWeaponAccessoryTree([StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) other)    | Upcast an instance of type [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) to [StatCategoriesWeaponAccessoryTree](/vext/ref/fb/statcategoriesweaponaccessorytree/).    |
| StatCategoriesWeaponAccessoryTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesWeaponAccessoryTree](/vext/ref/fb/statcategoriesweaponaccessorytree/).    |
| StatCategoriesWeaponAccessoryTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesWeaponAccessoryTree](/vext/ref/fb/statcategoriesweaponaccessorytree/).                                |
| StatCategoriesWeaponAccessoryTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesWeaponAccessoryTree](/vext/ref/fb/statcategoriesweaponaccessorytree/).                                      |
| StatCategoriesWeaponAccessoryTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesWeaponAccessoryTree](/vext/ref/fb/statcategoriesweaponaccessorytree/). |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesWeaponAccessoryTree](/vext/ref/fb/statcategoriesweaponaccessorytree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesWeaponAccessoryTree](/vext/ref/fb/statcategoriesweaponaccessorytree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
