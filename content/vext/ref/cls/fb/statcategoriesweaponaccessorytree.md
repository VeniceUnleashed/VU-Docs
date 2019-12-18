---
title: StatCategoriesWeaponAccessoryTree (Frostbite Container)
---
### Base Classes

[StatCategoriesGuidTree](StatCategoriesGuidTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesWeaponAccessoryTree()                                                          | Create a new instance of this container type.                                                                                                             |
| StatCategoriesWeaponAccessoryTree(StatCategoriesWeaponAccessoryTree other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| StatCategoriesWeaponAccessoryTree([StatCategoriesGuidTree](StatCategoriesGuidTree) other)    | Upcast an instance of type [StatCategoriesGuidTree](StatCategoriesGuidTree) to [StatCategoriesWeaponAccessoryTree](StatCategoriesWeaponAccessoryTree).    |
| StatCategoriesWeaponAccessoryTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesWeaponAccessoryTree](StatCategoriesWeaponAccessoryTree).    |
| StatCategoriesWeaponAccessoryTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesWeaponAccessoryTree](StatCategoriesWeaponAccessoryTree).                                |
| StatCategoriesWeaponAccessoryTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesWeaponAccessoryTree](StatCategoriesWeaponAccessoryTree).                                      |
| StatCategoriesWeaponAccessoryTree([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatCategoriesWeaponAccessoryTree](StatCategoriesWeaponAccessoryTree). |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoriesWeaponAccessoryTree](StatCategoriesWeaponAccessoryTree) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatCategoriesWeaponAccessoryTree](StatCategoriesWeaponAccessoryTree) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
