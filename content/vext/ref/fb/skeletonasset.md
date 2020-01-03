---
title: SkeletonAsset
---
### Base Classes

[BaseSkeletonAsset](/vext/ref/fb/baseskeletonasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| SkeletonAsset()                                                          | Create a new instance of this container type.                                                                     |
| SkeletonAsset(SkeletonAsset other)                                       | Create a reference copy of an instance of the same type.                                                          |
| SkeletonAsset([BaseSkeletonAsset](/vext/ref/fb/baseskeletonasset/) other)              | Upcast an instance of type [BaseSkeletonAsset](/vext/ref/fb/baseskeletonasset/) to [SkeletonAsset](/vext/ref/fb/skeletonasset/).              |
| SkeletonAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SkeletonAsset](/vext/ref/fb/skeletonasset/).                                      |
| SkeletonAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SkeletonAsset](/vext/ref/fb/skeletonasset/). |

## Properties

| Name           | Type                                                        | Description |
| -------------- | ----------------------------------------------------------- | ----------- |
| boneNames      | string\[\]                                                  |             |
| hierarchy      | number\[\]                                                  |             |
| localPose      | [LinearTransform](/vext/ref/shared/class/lineartransform)\[\] |             |
| modelPose      | [LinearTransform](/vext/ref/shared/class/lineartransform)\[\] |             |
| weaponBoneName | string                                                      |             |
| headBoneName   | string                                                      |             |
| hipBoneName    | string                                                      |             |
| cameraBoneName | string                                                      |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [SkeletonAsset](/vext/ref/fb/skeletonasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SkeletonAsset](/vext/ref/fb/skeletonasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
