---
title: CameraComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CameraComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| CameraComponentData(CameraComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CameraComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [CameraComponentData](/vext/ref/fb/cameracomponentdata/).                      |
| CameraComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CameraComponentData](/vext/ref/fb/cameracomponentdata/).                    |
| CameraComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CameraComponentData](/vext/ref/fb/cameracomponentdata/).              |
| CameraComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraComponentData](/vext/ref/fb/cameracomponentdata/). |

## Properties

| Name                         | Type                                                   | Description |
| ---------------------------- | ------------------------------------------------------ | ----------- |
| cameraTransitionPos          | [Vec3](/vext/ref/shared/class/vec3)                      |             |
| fieldOfView                  | number                                                 |             |
| forceFieldOfView             | number                                                 |             |
| camera                       | [TargetCameraData](/vext/ref/fb/targetcameradata/)                   |             |
| alternateView                | [AlternateCameraViewData](/vext/ref/fb/alternatecameraviewdata/)     |             |
| regularView                  | [RegularCameraViewData](/vext/ref/fb/regularcameraviewdata/)         |             |
| freezeHeight                 | number                                                 |             |
| stanceData                   | [StanceCameraData](/vext/ref/fb/stancecameradata/)                   |             |
| cameraSoundData              | [CameraComponentSoundData](/vext/ref/fb/cameracomponentsounddata/)   |             |
| soldierAnimatedCamera        | [SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata/) |             |
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
| [CameraComponentData](/vext/ref/fb/cameracomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraComponentData](/vext/ref/fb/cameracomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
