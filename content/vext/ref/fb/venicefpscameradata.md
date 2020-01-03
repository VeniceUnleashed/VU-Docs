---
title: VeniceFPSCameraData
---
### Base Classes

[FPSCameraData](/vext/ref/fb/fpscameradata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| VeniceFPSCameraData()                                                          | Create a new instance of this container type.                                                                                 |
| VeniceFPSCameraData(VeniceFPSCameraData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| VeniceFPSCameraData([FPSCameraData](/vext/ref/fb/fpscameradata/) other)                      | Upcast an instance of type [FPSCameraData](/vext/ref/fb/fpscameradata/) to [VeniceFPSCameraData](/vext/ref/fb/venicefpscameradata/).                      |
| VeniceFPSCameraData([TargetCameraData](/vext/ref/fb/targetcameradata/) other)                | Upcast an instance of type [TargetCameraData](/vext/ref/fb/targetcameradata/) to [VeniceFPSCameraData](/vext/ref/fb/venicefpscameradata/).                |
| VeniceFPSCameraData([CameraData](/vext/ref/fb/cameradata/) other)                            | Upcast an instance of type [CameraData](/vext/ref/fb/cameradata/) to [VeniceFPSCameraData](/vext/ref/fb/venicefpscameradata/).                            |
| VeniceFPSCameraData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VeniceFPSCameraData](/vext/ref/fb/venicefpscameradata/).                    |
| VeniceFPSCameraData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VeniceFPSCameraData](/vext/ref/fb/venicefpscameradata/).              |
| VeniceFPSCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceFPSCameraData](/vext/ref/fb/venicefpscameradata/). |

## Properties

| Name                            | Type   | Description |
| ------------------------------- | ------ | ----------- |
| suppressionBlurAmountMultiplier | number |             |
| suppressionBlurSizeMultiplier   | number |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceFPSCameraData](/vext/ref/fb/venicefpscameradata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceFPSCameraData](/vext/ref/fb/venicefpscameradata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
