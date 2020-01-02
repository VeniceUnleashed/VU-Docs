---
title: UavCameraData
---
### Base Classes

[TargetCameraData](TargetCameraData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| UavCameraData()                                                          | Create a new instance of this container type.                                                                     |
| UavCameraData(UavCameraData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| UavCameraData([TargetCameraData](TargetCameraData) other)                | Upcast an instance of type [TargetCameraData](TargetCameraData) to [UavCameraData](UavCameraData).                |
| UavCameraData([CameraData](CameraData) other)                            | Upcast an instance of type [CameraData](CameraData) to [UavCameraData](UavCameraData).                            |
| UavCameraData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [UavCameraData](UavCameraData).                    |
| UavCameraData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [UavCameraData](UavCameraData).              |
| UavCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UavCameraData](UavCameraData). |

## Properties

| Name               | Type                                           | Description |
| ------------------ | ---------------------------------------------- | ----------- |
| viewDistance       | number                                         |             |
| viewDistanceCurve  | [CameraSineCurveData](CameraSineCurveData)\[\] |             |
| viewAngle          | number                                         |             |
| viewAngleCurve     | [CameraSineCurveData](CameraSineCurveData)\[\] |             |
| rotationSpeed      | number                                         |             |
| rotationSpeedCurve | [CameraSineCurveData](CameraSineCurveData)\[\] |             |
| zoomFov            | number                                         |             |
| zoomDelay          | number                                         |             |
| zoomTransitionTime | number                                         |             |
| fov                | number                                         |             |
| focusPoint         | [UavCameraPointData](UavCameraPointData)       |             |
| centerPoint        | [UavCameraPointData](UavCameraPointData)       |             |
| upWeightDistance   | number                                         |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [UavCameraData](UavCameraData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UavCameraData](UavCameraData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
