---
title: VehicleCameraData
---
### Base Classes

[TargetCameraData](TargetCameraData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| VehicleCameraData()                                                          | Create a new instance of this container type.                                                                             |
| VehicleCameraData(VehicleCameraData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| VehicleCameraData([TargetCameraData](TargetCameraData) other)                | Upcast an instance of type [TargetCameraData](TargetCameraData) to [VehicleCameraData](VehicleCameraData).                |
| VehicleCameraData([CameraData](CameraData) other)                            | Upcast an instance of type [CameraData](CameraData) to [VehicleCameraData](VehicleCameraData).                            |
| VehicleCameraData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VehicleCameraData](VehicleCameraData).                    |
| VehicleCameraData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VehicleCameraData](VehicleCameraData).              |
| VehicleCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleCameraData](VehicleCameraData). |

## Properties

| Name                      | Type                              | Description |
| ------------------------- | --------------------------------- | ----------- |
| moveToPosition            | [Vec3](/vext/ref/shared/class/vec3) |             |
| moveToPositionSlopeFactor | [Vec3](/vext/ref/shared/class/vec3) |             |
| targetOffset              | [Vec3](/vext/ref/shared/class/vec3) |             |
| targetOffsetSlopeFactor   | [Vec3](/vext/ref/shared/class/vec3) |             |
| rotationFactor            | [Vec3](/vext/ref/shared/class/vec3) |             |
| positionFactor            | number                            |             |
| resetDistance             | number                            |             |
| fixedPosition             | bool                              |             |
| fixedAngleZ               | bool                              |             |
| useTerrainAdjustment      | bool                              |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleCameraData](VehicleCameraData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleCameraData](VehicleCameraData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
