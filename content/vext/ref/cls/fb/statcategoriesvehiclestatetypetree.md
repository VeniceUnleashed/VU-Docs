---
title: StatCategoriesVehicleStateTypeTree (Frostbite Container)
---
### Base Classes

[StatCategoriesBaseTree](StatCategoriesBaseTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                                 |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesVehicleStateTypeTree()                                                          | Create a new instance of this container type.                                                                                                               |
| StatCategoriesVehicleStateTypeTree(StatCategoriesVehicleStateTypeTree other)                  | Create a reference copy of an instance of the same type.                                                                                                    |
| StatCategoriesVehicleStateTypeTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesVehicleStateTypeTree](StatCategoriesVehicleStateTypeTree).    |
| StatCategoriesVehicleStateTypeTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesVehicleStateTypeTree](StatCategoriesVehicleStateTypeTree).                                |
| StatCategoriesVehicleStateTypeTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesVehicleStateTypeTree](StatCategoriesVehicleStateTypeTree).                                      |
| StatCategoriesVehicleStateTypeTree([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatCategoriesVehicleStateTypeTree](StatCategoriesVehicleStateTypeTree). |

## Methods

| Type                                                                     | Name            | Parameters                                     |
| ------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesVehicleStateTypeTree](StatCategoriesVehicleStateTypeTree) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatCategoriesVehicleStateTypeTree](StatCategoriesVehicleStateTypeTree) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
