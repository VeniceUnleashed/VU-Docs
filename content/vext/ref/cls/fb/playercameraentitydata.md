---
title: PlayerCameraEntityData (Frostbite Container)
---
### Base Classes

[CameraEntityBaseData](CameraEntityBaseData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PlayerCameraEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| PlayerCameraEntityData(PlayerCameraEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PlayerCameraEntityData([CameraEntityBaseData](CameraEntityBaseData) other)        | Upcast an instance of type [CameraEntityBaseData](CameraEntityBaseData) to [PlayerCameraEntityData](PlayerCameraEntityData).        |
| PlayerCameraEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [PlayerCameraEntityData](PlayerCameraEntityData).              |
| PlayerCameraEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PlayerCameraEntityData](PlayerCameraEntityData).                            |
| PlayerCameraEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PlayerCameraEntityData](PlayerCameraEntityData).                    |
| PlayerCameraEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PlayerCameraEntityData](PlayerCameraEntityData).              |
| PlayerCameraEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PlayerCameraEntityData](PlayerCameraEntityData). |

## Properties

| Name                                       | Type                     | Description |
| ------------------------------------------ | ------------------------ | ----------- |
| soldierTargetMode                          | [TargetMode](TargetMode) |             |
| soldierCameraIndex                         | number                   |             |
| vehicleTargetMode                          | [TargetMode](TargetMode) |             |
| vehicleCameraIndex                         | number                   |             |
| releaseControlIfTargetLost                 | bool                     |             |
| shouldTargetControllable                   | bool                     |             |
| shouldTargetVehicleDriverEntry             | bool                     |             |
| shouldTargetExtraPlayerInDoublePlayerEvent | bool                     |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerCameraEntityData](PlayerCameraEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PlayerCameraEntityData](PlayerCameraEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
