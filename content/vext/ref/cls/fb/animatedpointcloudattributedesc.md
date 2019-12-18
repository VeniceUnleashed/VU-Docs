---
title: AnimatedPointCloudAttributeDesc (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                            | Description                                              |
| ---------------------------------------------------------------------- | -------------------------------------------------------- |
| AnimatedPointCloudAttributeDesc()                                      | Create a new instance of this structure type.            |
| AnimatedPointCloudAttributeDesc(AnimatedPointCloudAttributeDesc other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type                                                               | Description |
| ------------------ | ------------------------------------------------------------------ | ----------- |
| usage              | [PointCloudAttributeUsage](PointCloudAttributeUsage)               |             |
| iFrameQuantization | [PointCloudAttributeQuantization](PointCloudAttributeQuantization) |             |
| dFrameQuantization | [PointCloudAttributeQuantization](PointCloudAttributeQuantization) |             |

## Methods

| Type                                                               | Name            | Parameters |
| ------------------------------------------------------------------ | --------------- | ---------- |
| [AnimatedPointCloudAttributeDesc](AnimatedPointCloudAttributeDesc) | [Clone](#clone) |            |

### Clone

> [AnimatedPointCloudAttributeDesc](AnimatedPointCloudAttributeDesc) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
