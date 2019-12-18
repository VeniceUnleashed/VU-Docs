---
title: StatCategoriesWeaponTree (Frostbite Container)
---
### Base Classes

[StatCategoriesGuidTree](StatCategoriesGuidTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesWeaponTree()                                                          | Create a new instance of this container type.                                                                                           |
| StatCategoriesWeaponTree(StatCategoriesWeaponTree other)                            | Create a reference copy of an instance of the same type.                                                                                |
| StatCategoriesWeaponTree([StatCategoriesGuidTree](StatCategoriesGuidTree) other)    | Upcast an instance of type [StatCategoriesGuidTree](StatCategoriesGuidTree) to [StatCategoriesWeaponTree](StatCategoriesWeaponTree).    |
| StatCategoriesWeaponTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesWeaponTree](StatCategoriesWeaponTree).    |
| StatCategoriesWeaponTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesWeaponTree](StatCategoriesWeaponTree).                                |
| StatCategoriesWeaponTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesWeaponTree](StatCategoriesWeaponTree).                                      |
| StatCategoriesWeaponTree([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatCategoriesWeaponTree](StatCategoriesWeaponTree). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesWeaponTree](StatCategoriesWeaponTree) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatCategoriesWeaponTree](StatCategoriesWeaponTree) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
