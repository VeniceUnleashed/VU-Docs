---
title: StatCategoriesVehicleWeaponTree
---
### Base Classes

[StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesVehicleWeaponTree()                                                          | Create a new instance of this container type.                                                                                                         |
| StatCategoriesVehicleWeaponTree(StatCategoriesVehicleWeaponTree other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| StatCategoriesVehicleWeaponTree([StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) other)    | Upcast an instance of type [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) to [StatCategoriesVehicleWeaponTree](/vext/ref/fb/statcategoriesvehicleweapontree/).    |
| StatCategoriesVehicleWeaponTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesVehicleWeaponTree](/vext/ref/fb/statcategoriesvehicleweapontree/).    |
| StatCategoriesVehicleWeaponTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesVehicleWeaponTree](/vext/ref/fb/statcategoriesvehicleweapontree/).                                |
| StatCategoriesVehicleWeaponTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesVehicleWeaponTree](/vext/ref/fb/statcategoriesvehicleweapontree/).                                      |
| StatCategoriesVehicleWeaponTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesVehicleWeaponTree](/vext/ref/fb/statcategoriesvehicleweapontree/). |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesVehicleWeaponTree](/vext/ref/fb/statcategoriesvehicleweapontree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesVehicleWeaponTree](/vext/ref/fb/statcategoriesvehicleweapontree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
