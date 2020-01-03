---
title: AnimatedPointCloudAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AnimatedPointCloudAsset()                                                          | Create a new instance of this container type.                                                                                         |
| AnimatedPointCloudAsset(AnimatedPointCloudAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| AnimatedPointCloudAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AnimatedPointCloudAsset](/vext/ref/fb/animatedpointcloudasset/).                                      |
| AnimatedPointCloudAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedPointCloudAsset](/vext/ref/fb/animatedpointcloudasset/). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimatedPointCloudAsset](/vext/ref/fb/animatedpointcloudasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedPointCloudAsset](/vext/ref/fb/animatedpointcloudasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
