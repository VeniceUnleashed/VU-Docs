---
title: PathfindingObjectCategoryAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingObjectCategoryAsset()                                                          | Create a new instance of this container type.                                                                                                       |
| PathfindingObjectCategoryAsset(PathfindingObjectCategoryAsset other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| PathfindingObjectCategoryAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PathfindingObjectCategoryAsset](/vext/ref/fb/pathfindingobjectcategoryasset/).                                      |
| PathfindingObjectCategoryAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathfindingObjectCategoryAsset](/vext/ref/fb/pathfindingobjectcategoryasset/). |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PathfindingObjectCategoryAsset](/vext/ref/fb/pathfindingobjectcategoryasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PathfindingObjectCategoryAsset](/vext/ref/fb/pathfindingobjectcategoryasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
