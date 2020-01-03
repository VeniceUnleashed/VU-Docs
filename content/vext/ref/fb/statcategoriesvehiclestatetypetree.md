---
title: StatCategoriesVehicleStateTypeTree
---
### Base Classes

[StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                                 |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesVehicleStateTypeTree()                                                          | Create a new instance of this container type.                                                                                                               |
| StatCategoriesVehicleStateTypeTree(StatCategoriesVehicleStateTypeTree other)                  | Create a reference copy of an instance of the same type.                                                                                                    |
| StatCategoriesVehicleStateTypeTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesVehicleStateTypeTree](/vext/ref/fb/statcategoriesvehiclestatetypetree/).    |
| StatCategoriesVehicleStateTypeTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesVehicleStateTypeTree](/vext/ref/fb/statcategoriesvehiclestatetypetree/).                                |
| StatCategoriesVehicleStateTypeTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesVehicleStateTypeTree](/vext/ref/fb/statcategoriesvehiclestatetypetree/).                                      |
| StatCategoriesVehicleStateTypeTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesVehicleStateTypeTree](/vext/ref/fb/statcategoriesvehiclestatetypetree/). |

## Methods

| Type                                                                     | Name            | Parameters                                     |
| ------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesVehicleStateTypeTree](/vext/ref/fb/statcategoriesvehiclestatetypetree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesVehicleStateTypeTree](/vext/ref/fb/statcategoriesvehiclestatetypetree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
