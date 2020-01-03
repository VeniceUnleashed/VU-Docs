---
title: AnimatedCameraData
---
### Base Classes

[CameraData](/vext/ref/fb/cameradata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| AnimatedCameraData()                                                          | Create a new instance of this container type.                                                                               |
| AnimatedCameraData(AnimatedCameraData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| AnimatedCameraData([CameraData](/vext/ref/fb/cameradata/) other)                            | Upcast an instance of type [CameraData](/vext/ref/fb/cameradata/) to [AnimatedCameraData](/vext/ref/fb/animatedcameradata/).                            |
| AnimatedCameraData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AnimatedCameraData](/vext/ref/fb/animatedcameradata/).                    |
| AnimatedCameraData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AnimatedCameraData](/vext/ref/fb/animatedcameradata/).              |
| AnimatedCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedCameraData](/vext/ref/fb/animatedcameradata/). |

## Properties

| Name       | Type                           | Description |
| ---------- | ------------------------------ | ----------- |
| skeleton   | [SkeletonAsset](/vext/ref/fb/skeletonasset/) |             |
| cameraBone | string                         |             |
| fovBone    | string                         |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimatedCameraData](/vext/ref/fb/animatedcameradata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedCameraData](/vext/ref/fb/animatedcameradata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
