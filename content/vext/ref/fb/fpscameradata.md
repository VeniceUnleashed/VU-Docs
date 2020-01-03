---
title: FPSCameraData
---
### Base Classes

[TargetCameraData](/vext/ref/fb/targetcameradata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| FPSCameraData()                                                          | Create a new instance of this container type.                                                                     |
| FPSCameraData(FPSCameraData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| FPSCameraData([TargetCameraData](/vext/ref/fb/targetcameradata/) other)                | Upcast an instance of type [TargetCameraData](/vext/ref/fb/targetcameradata/) to [FPSCameraData](/vext/ref/fb/fpscameradata/).                |
| FPSCameraData([CameraData](/vext/ref/fb/cameradata/) other)                            | Upcast an instance of type [CameraData](/vext/ref/fb/cameradata/) to [FPSCameraData](/vext/ref/fb/fpscameradata/).                            |
| FPSCameraData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FPSCameraData](/vext/ref/fb/fpscameradata/).                    |
| FPSCameraData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FPSCameraData](/vext/ref/fb/fpscameradata/).              |
| FPSCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FPSCameraData](/vext/ref/fb/fpscameradata/). |

## Properties

| Name               | Type                             | Description |
| ------------------ | -------------------------------- | ----------- |
| turnEffectSettings | [TurnEffectData](/vext/ref/fb/turneffectdata/) |             |
| blurEffectSettings | [BlurEffectData](/vext/ref/fb/blureffectdata/) |             |
| fov                | number                           |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [FPSCameraData](/vext/ref/fb/fpscameradata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FPSCameraData](/vext/ref/fb/fpscameradata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
