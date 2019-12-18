---
title: StatCategoriesVehicleTree (Frostbite Container)
---
### Base Classes

[StatCategoriesGuidTree](StatCategoriesGuidTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesVehicleTree()                                                          | Create a new instance of this container type.                                                                                             |
| StatCategoriesVehicleTree(StatCategoriesVehicleTree other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| StatCategoriesVehicleTree([StatCategoriesGuidTree](StatCategoriesGuidTree) other)    | Upcast an instance of type [StatCategoriesGuidTree](StatCategoriesGuidTree) to [StatCategoriesVehicleTree](StatCategoriesVehicleTree).    |
| StatCategoriesVehicleTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesVehicleTree](StatCategoriesVehicleTree).    |
| StatCategoriesVehicleTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesVehicleTree](StatCategoriesVehicleTree).                                |
| StatCategoriesVehicleTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesVehicleTree](StatCategoriesVehicleTree).                                      |
| StatCategoriesVehicleTree([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatCategoriesVehicleTree](StatCategoriesVehicleTree). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesVehicleTree](StatCategoriesVehicleTree) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatCategoriesVehicleTree](StatCategoriesVehicleTree) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
