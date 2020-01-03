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
| skeleton     | [SkeletonAsset](/vext/ref/fb/skeletonasset/)                              |             |
| boneMap      | number\[\]                                                  |             |
| transformMap | [LinearTransform](/vext/ref/shared/class/lineartransform)\[\] |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [SubSkeleton](/vext/ref/fb/subskeleton/) | [Clone](#clone) |            |

### Clone

> [SubSkeleton](/vext/ref/fb/subskeleton/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
