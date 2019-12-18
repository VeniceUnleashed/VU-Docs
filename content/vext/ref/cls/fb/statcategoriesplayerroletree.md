---
title: StatCategoriesPlayerRoleTree (Frostbite Container)
---
### Base Classes

[StatCategoriesBaseTree](StatCategoriesBaseTree)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoriesPlayerRoleTree()                                                          | Create a new instance of this container type.                                                                                                   |
| StatCategoriesPlayerRoleTree(StatCategoriesPlayerRoleTree other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| StatCategoriesPlayerRoleTree([StatCategoriesBaseTree](StatCategoriesBaseTree) other)    | Upcast an instance of type [StatCategoriesBaseTree](StatCategoriesBaseTree) to [StatCategoriesPlayerRoleTree](StatCategoriesPlayerRoleTree).    |
| StatCategoriesPlayerRoleTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [StatCategoriesPlayerRoleTree](StatCategoriesPlayerRoleTree).                                |
| StatCategoriesPlayerRoleTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatCategoriesPlayerRoleTree](StatCategoriesPlayerRoleTree).                                      |
| StatCategoriesPlayerRoleTree([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatCategoriesPlayerRoleTree](StatCategoriesPlayerRoleTree). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StatCategoriesPlayerRoleTree](StatCategoriesPlayerRoleTree) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatCategoriesPlayerRoleTree](StatCategoriesPlayerRoleTree) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
