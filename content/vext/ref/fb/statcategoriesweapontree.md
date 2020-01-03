---
title: StatCategoriesWeaponTree
---
### Base Classes

[StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesWeaponTree()                                                          | Create a new instance of this container type.                                                                                           |
| StatCategoriesWeaponTree(StatCategoriesWeaponTree other)                            | Create a reference copy of an instance of the same type.                                                                                |
| StatCategoriesWeaponTree([StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) other)    | Upcast an instance of type [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) to [StatCategoriesWeaponTree](/vext/ref/fb/statcategoriesweapontree/).    |
| StatCategoriesWeaponTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesWeaponTree](/vext/ref/fb/statcategoriesweapontree/).    |
| StatCategoriesWeaponTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesWeaponTree](/vext/ref/fb/statcategoriesweapontree/).                                |
| StatCategoriesWeaponTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesWeaponTree](/vext/ref/fb/statcategoriesweapontree/).                                      |
| StatCategoriesWeaponTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesWeaponTree](/vext/ref/fb/statcategoriesweapontree/). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesWeaponTree](/vext/ref/fb/statcategoriesweapontree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesWeaponTree](/vext/ref/fb/statcategoriesweapontree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
