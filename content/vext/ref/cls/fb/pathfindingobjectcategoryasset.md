---
title: PathfindingObjectCategoryAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingObjectCategoryAsset()                                                          | Create a new instance of this container type.                                                                                                       |
| PathfindingObjectCategoryAsset(PathfindingObjectCategoryAsset other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| PathfindingObjectCategoryAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PathfindingObjectCategoryAsset](PathfindingObjectCategoryAsset).                                      |
| PathfindingObjectCategoryAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PathfindingObjectCategoryAsset](PathfindingObjectCategoryAsset). |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PathfindingObjectCategoryAsset](PathfindingObjectCategoryAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PathfindingObjectCategoryAsset](PathfindingObjectCategoryAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
