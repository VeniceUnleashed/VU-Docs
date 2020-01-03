---
title: ChaseCameraData
---
### Base Classes

[TargetCameraData](/vext/ref/fb/targetcameradata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ChaseCameraData()                                                          | Create a new instance of this container type.                                                                         |
| ChaseCameraData(ChaseCameraData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| ChaseCameraData([TargetCameraData](/vext/ref/fb/targetcameradata/) other)                | Upcast an instance of type [TargetCameraData](/vext/ref/fb/targetcameradata/) to [ChaseCameraData](/vext/ref/fb/chasecameradata/).                |
| ChaseCameraData([CameraData](/vext/ref/fb/cameradata/) other)                            | Upcast an instance of type [CameraData](/vext/ref/fb/cameradata/) to [ChaseCameraData](/vext/ref/fb/chasecameradata/).                            |
| ChaseCameraData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ChaseCameraData](/vext/ref/fb/chasecameradata/).                    |
| ChaseCameraData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ChaseCameraData](/vext/ref/fb/chasecameradata/).              |
| ChaseCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChaseCameraData](/vext/ref/fb/chasecameradata/). |

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
| [ChaseCameraData](/vext/ref/fb/chasecameradata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChaseCameraData](/vext/ref/fb/chasecameradata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
