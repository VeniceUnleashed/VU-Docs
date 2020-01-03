---
title: VehicleCameraData
---
### Base Classes

[TargetCameraData](/vext/ref/fb/targetcameradata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| VehicleCameraData()                                                          | Create a new instance of this container type.                                                                             |
| VehicleCameraData(VehicleCameraData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| VehicleCameraData([TargetCameraData](/vext/ref/fb/targetcameradata/) other)                | Upcast an instance of type [TargetCameraData](/vext/ref/fb/targetcameradata/) to [VehicleCameraData](/vext/ref/fb/vehiclecameradata/).                |
| VehicleCameraData([CameraData](/vext/ref/fb/cameradata/) other)                            | Upcast an instance of type [CameraData](/vext/ref/fb/cameradata/) to [VehicleCameraData](/vext/ref/fb/vehiclecameradata/).                            |
| VehicleCameraData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VehicleCameraData](/vext/ref/fb/vehiclecameradata/).                    |
| VehicleCameraData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VehicleCameraData](/vext/ref/fb/vehiclecameradata/).              |
| VehicleCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleCameraData](/vext/ref/fb/vehiclecameradata/). |

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
| [VehicleCameraData](/vext/ref/fb/vehiclecameradata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleCameraData](/vext/ref/fb/vehiclecameradata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
