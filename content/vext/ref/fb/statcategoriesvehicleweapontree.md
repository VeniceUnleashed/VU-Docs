---
title: StatCategoriesVehicleWeaponTree
---
### Base Classes

[StatCategoriesGuidTree](StatCategoriesGuidTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesVehicleWeaponTree()                                                          | Create a new instance of this container type.                                                                                                         |
| StatCategoriesVehicleWeaponTree(StatCategoriesVehicleWeaponTree other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| StatCategoriesVehicleWeaponTree([StatCategoriesGuidTree](StatCategoriesGuidTree) other)    | Upcast an instance of type [StatCategoriesGuidTree](StatCategoriesGuidTree) to [StatCategoriesVehicleWeaponTree](StatCategoriesVehicleWeaponTree).    |
| StatCategoriesVehicleWeaponTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesVehicleWeaponTree](StatCategoriesVehicleWeaponTree).    |
| StatCategoriesVehicleWeaponTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesVehicleWeaponTree](StatCategoriesVehicleWeaponTree).                                |
| StatCategoriesVehicleWeaponTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesVehicleWeaponTree](StatCategoriesVehicleWeaponTree).                                      |
| StatCategoriesVehicleWeaponTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoriesVehicleWeaponTree](StatCategoriesVehicleWeaponTree). |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesVehicleWeaponTree](StatCategoriesVehicleWeaponTree) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoriesVehicleWeaponTree](StatCategoriesVehicleWeaponTree) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
