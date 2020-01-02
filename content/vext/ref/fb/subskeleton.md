---
title: SubSkeleton
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                    | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| SubSkeleton()                  | Create a new instance of this structure type.            |
| SubSkeleton(SubSkeleton other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type                                                        | Description |
| ------------ | ----------------------------------------------------------- | ----------- |
| skeleton     | [SkeletonAsset](SkeletonAsset)                              |             |
| boneMap      | number\[\]                                                  |             |
| transformMap | [LinearTransform](/vext/ref/shared/class/LinearTransform)\[\] |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [SubSkeleton](SubSkeleton) | [Clone](#clone) |            |

### Clone

> [SubSkeleton](SubSkeleton) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
