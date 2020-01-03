---
title: StatCategoriesVehicleTree
---
### Base Classes

[StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesVehicleTree()                                                          | Create a new instance of this container type.                                                                                             |
| StatCategoriesVehicleTree(StatCategoriesVehicleTree other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| StatCategoriesVehicleTree([StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) other)    | Upcast an instance of type [StatCategoriesGuidTree](/vext/ref/fb/statcategoriesguidtree/) to [StatCategoriesVehicleTree](/vext/ref/fb/statcategoriesvehicletree/).    |
| StatCategoriesVehicleTree([StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) other)    | Upcast an instance of type [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/) to [StatCategoriesVehicleTree](/vext/ref/fb/statcategoriesvehicletree/).    |
| StatCategoriesVehicleTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [StatCategoriesVehicleTree](/vext/ref/fb/statcategoriesvehicletree/).                                |
| StatCategoriesVehicleTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoriesVehicleTree](/vext/ref/fb/statcategoriesvehicletree/).                                      |
| StatCategoriesVehicleTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesVehicleTree](/vext/ref/fb/statcategoriesvehicletree/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesVehicleTree](/vext/ref/fb/statcategoriesvehicletree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesVehicleTree](/vext/ref/fb/statcategoriesvehicletree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
