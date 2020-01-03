---
title: UavCameraData
---
### Base Classes

[TargetCameraData](/vext/ref/fb/targetcameradata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| UavCameraData()                                                          | Create a new instance of this container type.                                                                     |
| UavCameraData(UavCameraData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| UavCameraData([TargetCameraData](/vext/ref/fb/targetcameradata/) other)                | Upcast an instance of type [TargetCameraData](/vext/ref/fb/targetcameradata/) to [UavCameraData](/vext/ref/fb/uavcameradata/).                |
| UavCameraData([CameraData](/vext/ref/fb/cameradata/) other)                            | Upcast an instance of type [CameraData](/vext/ref/fb/cameradata/) to [UavCameraData](/vext/ref/fb/uavcameradata/).                            |
| UavCameraData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [UavCameraData](/vext/ref/fb/uavcameradata/).                    |
| UavCameraData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [UavCameraData](/vext/ref/fb/uavcameradata/).              |
| UavCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UavCameraData](/vext/ref/fb/uavcameradata/). |

## Properties

| Name               | Type                                           | Description |
| ------------------ | ---------------------------------------------- | ----------- |
| viewDistance       | number                                         |             |
| viewDistanceCurve  | [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata/)\[\] |             |
| viewAngle          | number                                         |             |
| viewAngleCurve     | [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata/)\[\] |             |
| rotationSpeed      | number                                         |             |
| rotationSpeedCurve | [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata/)\[\] |             |
| zoomFov            | number                                         |             |
| zoomDelay          | number                                         |             |
| zoomTransitionTime | number                                         |             |
| fov                | number                                         |             |
| focusPoint         | [UavCameraPointData](/vext/ref/fb/uavcamerapointdata/)       |             |
| centerPoint        | [UavCameraPointData](/vext/ref/fb/uavcamerapointdata/)       |             |
| upWeightDistance   | number                                         |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [UavCameraData](/vext/ref/fb/uavcameradata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UavCameraData](/vext/ref/fb/uavcameradata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
