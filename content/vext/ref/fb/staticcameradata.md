---
title: StaticCameraData
---
### Base Classes

[TargetCameraData](/vext/ref/fb/targetcameradata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| StaticCameraData()                                                          | Create a new instance of this container type.                                                                           |
| StaticCameraData(StaticCameraData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| StaticCameraData([TargetCameraData](/vext/ref/fb/targetcameradata/) other)                | Upcast an instance of type [TargetCameraData](/vext/ref/fb/targetcameradata/) to [StaticCameraData](/vext/ref/fb/staticcameradata/).                |
| StaticCameraData([CameraData](/vext/ref/fb/cameradata/) other)                            | Upcast an instance of type [CameraData](/vext/ref/fb/cameradata/) to [StaticCameraData](/vext/ref/fb/staticcameradata/).                            |
| StaticCameraData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [StaticCameraData](/vext/ref/fb/staticcameradata/).                    |
| StaticCameraData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [StaticCameraData](/vext/ref/fb/staticcameradata/).              |
| StaticCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StaticCameraData](/vext/ref/fb/staticcameradata/). |

## Properties

| Name                              | Type                                                         | Description |
| --------------------------------- | ------------------------------------------------------------ | ----------- |
| leftCurve                         | [Vec3](/vext/ref/shared/class/vec3)\[\]                        |             |
| rightCurve                        | [Vec3](/vext/ref/shared/class/vec3)\[\]                        |             |
| upCurve                           | [Vec3](/vext/ref/shared/class/vec3)\[\]                        |             |
| downCurve                         | [Vec3](/vext/ref/shared/class/vec3)\[\]                        |             |
| upPitchAngle                      | number                                                       |             |
| yawInputAction                    | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)                 |             |
| loosePartPhysics                  | [CameraLoosePartPhysicsData](/vext/ref/fb/cameraloosepartphysicsdata/)\[\] |             |
| leftYawAngle                      | number                                                       |             |
| rightYawAngle                     | number                                                       |             |
| pitchSensitivityZoomed            | number                                                       |             |
| downPitchAngle                    | number                                                       |             |
| averageFilterFrames               | number                                                       |             |
| pitchInputAction                  | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)                 |             |
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
| [StaticCameraData](/vext/ref/fb/staticcameradata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StaticCameraData](/vext/ref/fb/staticcameradata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
