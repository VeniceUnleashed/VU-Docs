---
title: SkeletonAsset
---
### Base Classes

[BaseSkeletonAsset](BaseSkeletonAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| SkeletonAsset()                                                          | Create a new instance of this container type.                                                                     |
| SkeletonAsset(SkeletonAsset other)                                       | Create a reference copy of an instance of the same type.                                                          |
| SkeletonAsset([BaseSkeletonAsset](BaseSkeletonAsset) other)              | Upcast an instance of type [BaseSkeletonAsset](BaseSkeletonAsset) to [SkeletonAsset](SkeletonAsset).              |
| SkeletonAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SkeletonAsset](SkeletonAsset).                                      |
| SkeletonAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SkeletonAsset](SkeletonAsset). |

## Properties

| Name           | Type                                                        | Description |
| -------------- | ----------------------------------------------------------- | ----------- |
| boneNames      | string\[\]                                                  |             |
| hierarchy      | number\[\]                                                  |             |
| localPose      | [LinearTransform](/vext/ref/shared/class/LinearTransform)\[\] |             |
| modelPose      | [LinearTransform](/vext/ref/shared/class/LinearTransform)\[\] |             |
| weaponBoneName | string                                                      |             |
| headBoneName   | string                                                      |             |
| hipBoneName    | string                                                      |             |
| cameraBoneName | string                                                      |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [SkeletonAsset](SkeletonAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SkeletonAsset](SkeletonAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
