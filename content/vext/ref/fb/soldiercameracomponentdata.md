---
title: SoldierCameraComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierCameraComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| SoldierCameraComponentData(SoldierCameraComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| SoldierCameraComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata/).                      |
| SoldierCameraComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata/).                    |
| SoldierCameraComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata/).              |
| SoldierCameraComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata/). |

## Properties

| Name                       | Type                                     | Description |
| -------------------------- | ---------------------------------------- | ----------- |
| explosionImpulseMultiplier | number                                   |             |
| strafeTiltStrength         | number                                   |             |
| pitchTiltStrength          | number                                   |             |
| cameras                    | [TargetCameraData](/vext/ref/fb/targetcameradata/)\[\] |             |
| cameraBinding              | [CameraBinding](/vext/ref/fb/camerabinding/)           |             |
| forceFieldOfView           | number                                   |             |
| authoritativeEyePosition   | bool                                     |             |
| disableAiming              | bool                                     |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
