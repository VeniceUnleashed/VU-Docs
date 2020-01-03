---
title: StatCategoryTreeCollection
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| StatCategoryTreeCollection()                                                          | Create a new instance of this container type.                                                                                               |
| StatCategoryTreeCollection(StatCategoryTreeCollection other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| StatCategoryTreeCollection([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection/).                                      |
| StatCategoryTreeCollection([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection/). |

## Properties

| Name          | Type                                                 | Description |
| ------------- | ---------------------------------------------------- | ----------- |
| categoryTrees | [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree/)\[\] |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
