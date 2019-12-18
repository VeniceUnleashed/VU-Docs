---
title: CameraComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CameraComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| CameraComponentData(CameraComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CameraComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [CameraComponentData](CameraComponentData).                      |
| CameraComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CameraComponentData](CameraComponentData).                    |
| CameraComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CameraComponentData](CameraComponentData).              |
| CameraComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CameraComponentData](CameraComponentData). |

## Properties

| Name                         | Type                                                   | Description |
| ---------------------------- | ------------------------------------------------------ | ----------- |
| cameraTransitionPos          | [Vec3](/vext/ref/cls/shr/Vec3)                      |             |
| fieldOfView                  | number                                                 |             |
| forceFieldOfView             | number                                                 |             |
| camera                       | [TargetCameraData](TargetCameraData)                   |             |
| alternateView                | [AlternateCameraViewData](AlternateCameraViewData)     |             |
| regularView                  | [RegularCameraViewData](RegularCameraViewData)         |             |
| freezeHeight                 | number                                                 |             |
| stanceData                   | [StanceCameraData](StanceCameraData)                   |             |
| cameraSoundData              | [CameraComponentSoundData](CameraComponentSoundData)   |             |
| soldierAnimatedCamera        | [SoldierAnimatedCameraData](SoldierAnimatedCameraData) |             |
| cameraTransitionTime         | number                                                 |             |
| meshParentComponentNumber    | number                                                 |             |
| enableCameraMesh             | bool                                                   |             |
| receiveImpulsesAsThirdPerson | bool                                                   |             |
| useCameraTransition          | bool                                                   |             |
| alternateViewEnabled         | bool                                                   |             |
| isFirstPerson                | bool                                                   |             |
| ignoreOwnerOrientation       | bool                                                   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [CameraComponentData](CameraComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CameraComponentData](CameraComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
