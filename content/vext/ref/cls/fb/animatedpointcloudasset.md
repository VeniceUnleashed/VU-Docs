---
title: AnimatedPointCloudAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AnimatedPointCloudAsset()                                                          | Create a new instance of this container type.                                                                                         |
| AnimatedPointCloudAsset(AnimatedPointCloudAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| AnimatedPointCloudAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AnimatedPointCloudAsset](AnimatedPointCloudAsset).                                      |
| AnimatedPointCloudAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AnimatedPointCloudAsset](AnimatedPointCloudAsset). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimatedPointCloudAsset](AnimatedPointCloudAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AnimatedPointCloudAsset](AnimatedPointCloudAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
