---
title: ChaseCameraData
---
### Base Classes

[TargetCameraData](TargetCameraData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ChaseCameraData()                                                          | Create a new instance of this container type.                                                                         |
| ChaseCameraData(ChaseCameraData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| ChaseCameraData([TargetCameraData](TargetCameraData) other)                | Upcast an instance of type [TargetCameraData](TargetCameraData) to [ChaseCameraData](ChaseCameraData).                |
| ChaseCameraData([CameraData](CameraData) other)                            | Upcast an instance of type [CameraData](CameraData) to [ChaseCameraData](ChaseCameraData).                            |
| ChaseCameraData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ChaseCameraData](ChaseCameraData).                    |
| ChaseCameraData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ChaseCameraData](ChaseCameraData).              |
| ChaseCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChaseCameraData](ChaseCameraData). |

## Properties

| Name                            | Type                              | Description |
| ------------------------------- | --------------------------------- | ----------- |
| targetOffset                    | [Vec3](/vext/ref/shared/class/vec3) |             |
| toWantedPositionScale           | [Vec3](/vext/ref/shared/class/vec3) |             |
| awayFromTargetForceScale        | number                            |             |
| targetRotationOffset            | number                            |             |
| maxViewRotationAngleDeg         | number                            |             |
| wantedAngleDeg                  | number                            |             |
| wantedDistance                  | number                            |             |
| maxDistance                     | number                            |             |
| snapDistance                    | number                            |             |
| forceFieldRadius                | number                            |             |
| collisionRadius                 | number                            |             |
| forceFieldForceScale            | number                            |             |
| maxVelocity                     | number                            |             |
| velocityDrag                    | number                            |             |
| pillExpandSizeSpeedAcceleration | number                            |             |
| pillMinimumCollisionRadius      | number                            |             |
| pillMaximumCollisionRadius      | number                            |             |
| pillMinimumCollisionLength      | number                            |             |
| lookDistanceScale               | number                            |             |
| lookDistanceInFrontOfTarget     | number                            |             |
| updateRate                      | number                            |             |
| keepTargetPitch                 | bool                              |             |
| inheritTargetVelocity           | bool                              |             |
| shouldRollWithTarget            | bool                              |             |
| hasCollision                    | bool                              |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [ChaseCameraData](ChaseCameraData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChaseCameraData](ChaseCameraData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
