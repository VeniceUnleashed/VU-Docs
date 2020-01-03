---
title: AnimatedPointCloudAttributeDesc
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
| usage              | [PointCloudAttributeUsage](/vext/ref/fb/pointcloudattributeusage/)               |             |
| iFrameQuantization | [PointCloudAttributeQuantization](/vext/ref/fb/pointcloudattributequantization/) |             |
| dFrameQuantization | [PointCloudAttributeQuantization](/vext/ref/fb/pointcloudattributequantization/) |             |

## Methods

| Type                                                               | Name            | Parameters |
| ------------------------------------------------------------------ | --------------- | ---------- |
| [AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc/) | [Clone](#clone) |            |

### Clone

> [AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
