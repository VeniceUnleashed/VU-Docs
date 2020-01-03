---
title: AnimatedCameraData
---
### Base Classes

[CameraData](CameraData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| AnimatedCameraData()                                                          | Create a new instance of this container type.                                                                               |
| AnimatedCameraData(AnimatedCameraData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| AnimatedCameraData([CameraData](CameraData) other)                            | Upcast an instance of type [CameraData](CameraData) to [AnimatedCameraData](AnimatedCameraData).                            |
| AnimatedCameraData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AnimatedCameraData](AnimatedCameraData).                    |
| AnimatedCameraData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AnimatedCameraData](AnimatedCameraData).              |
| AnimatedCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedCameraData](AnimatedCameraData). |

## Properties

| Name       | Type                           | Description |
| ---------- | ------------------------------ | ----------- |
| skeleton   | [SkeletonAsset](SkeletonAsset) |             |
| cameraBone | string                         |             |
| fovBone    | string                         |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimatedCameraData](AnimatedCameraData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedCameraData](AnimatedCameraData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
