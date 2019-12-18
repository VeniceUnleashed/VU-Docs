---
title: SoldierCameraComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierCameraComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| SoldierCameraComponentData(SoldierCameraComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| SoldierCameraComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SoldierCameraComponentData](SoldierCameraComponentData).                      |
| SoldierCameraComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierCameraComponentData](SoldierCameraComponentData).                    |
| SoldierCameraComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierCameraComponentData](SoldierCameraComponentData).              |
| SoldierCameraComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierCameraComponentData](SoldierCameraComponentData). |

## Properties

| Name                       | Type                                     | Description |
| -------------------------- | ---------------------------------------- | ----------- |
| explosionImpulseMultiplier | number                                   |             |
| strafeTiltStrength         | number                                   |             |
| pitchTiltStrength          | number                                   |             |
| cameras                    | [TargetCameraData](TargetCameraData)\[\] |             |
| cameraBinding              | [CameraBinding](CameraBinding)           |             |
| forceFieldOfView           | number                                   |             |
| authoritativeEyePosition   | bool                                     |             |
| disableAiming              | bool                                     |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierCameraComponentData](SoldierCameraComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierCameraComponentData](SoldierCameraComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
