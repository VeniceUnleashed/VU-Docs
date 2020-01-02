---
title: StaticCameraData
---
### Base Classes

[TargetCameraData](TargetCameraData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| StaticCameraData()                                                          | Create a new instance of this container type.                                                                           |
| StaticCameraData(StaticCameraData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| StaticCameraData([TargetCameraData](TargetCameraData) other)                | Upcast an instance of type [TargetCameraData](TargetCameraData) to [StaticCameraData](StaticCameraData).                |
| StaticCameraData([CameraData](CameraData) other)                            | Upcast an instance of type [CameraData](CameraData) to [StaticCameraData](StaticCameraData).                            |
| StaticCameraData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [StaticCameraData](StaticCameraData).                    |
| StaticCameraData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [StaticCameraData](StaticCameraData).              |
| StaticCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StaticCameraData](StaticCameraData). |

## Properties

| Name                              | Type                                                         | Description |
| --------------------------------- | ------------------------------------------------------------ | ----------- |
| leftCurve                         | [Vec3](/vext/ref/shared/class/Vec3)\[\]                        |             |
| rightCurve                        | [Vec3](/vext/ref/shared/class/Vec3)\[\]                        |             |
| upCurve                           | [Vec3](/vext/ref/shared/class/Vec3)\[\]                        |             |
| downCurve                         | [Vec3](/vext/ref/shared/class/Vec3)\[\]                        |             |
| upPitchAngle                      | number                                                       |             |
| yawInputAction                    | [EntryInputActionEnum](EntryInputActionEnum)                 |             |
| loosePartPhysics                  | [CameraLoosePartPhysicsData](CameraLoosePartPhysicsData)\[\] |             |
| leftYawAngle                      | number                                                       |             |
| rightYawAngle                     | number                                                       |             |
| pitchSensitivityZoomed            | number                                                       |             |
| downPitchAngle                    | number                                                       |             |
| averageFilterFrames               | number                                                       |             |
| pitchInputAction                  | [EntryInputActionEnum](EntryInputActionEnum)                 |             |
| yawSensitivityZoomed              | number                                                       |             |
| pitchSensitivityNonZoomed         | number                                                       |             |
| yawSensitivityNonZoomed           | number                                                       |             |
| resetAccumulatedInputOnViewChange | bool                                                         |             |
| mirrorHorizontalCurves            | bool                                                         |             |
| accumulateInput                   | bool                                                         |             |
| mirrorVerticalCurves              | bool                                                         |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [StaticCameraData](StaticCameraData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StaticCameraData](StaticCameraData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
