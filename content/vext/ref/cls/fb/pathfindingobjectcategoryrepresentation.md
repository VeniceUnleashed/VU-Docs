---
title: PathfindingObjectCategoryRepresentation (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                                            | Description                                              |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| PathfindingObjectCategoryRepresentation()                                              | Create a new instance of this structure type.            |
| PathfindingObjectCategoryRepresentation(PathfindingObjectCategoryRepresentation other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                                             | Description |
| -------------- | ---------------------------------------------------------------- | ----------- |
| category       | [PathfindingObjectCategoryAsset](PathfindingObjectCategoryAsset) |             |
| representation | [PathfindingRepresentation](PathfindingRepresentation)           |             |

## Methods

| Type                                                                               | Name            | Parameters |
| ---------------------------------------------------------------------------------- | --------------- | ---------- |
| [PathfindingObjectCategoryRepresentation](PathfindingObjectCategoryRepresentation) | [Clone](#clone) |            |

### Clone

> [PathfindingObjectCategoryRepresentation](PathfindingObjectCategoryRepresentation) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
