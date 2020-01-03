---
title: PlayerCameraEntityData
---
### Base Classes

[CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PlayerCameraEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| PlayerCameraEntityData(PlayerCameraEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PlayerCameraEntityData([CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/) other)        | Upcast an instance of type [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/) to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata/).        |
| PlayerCameraEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata/).              |
| PlayerCameraEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata/).                            |
| PlayerCameraEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata/).                    |
| PlayerCameraEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata/).              |
| PlayerCameraEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata/). |

## Properties

| Name                                       | Type                     | Description |
| ------------------------------------------ | ------------------------ | ----------- |
| soldierTargetMode                          | [TargetMode](/vext/ref/fb/targetmode/) |             |
| soldierCameraIndex                         | number                   |             |
| vehicleTargetMode                          | [TargetMode](/vext/ref/fb/targetmode/) |             |
| vehicleCameraIndex                         | number                   |             |
| releaseControlIfTargetLost                 | bool                     |             |
| shouldTargetControllable                   | bool                     |             |
| shouldTargetVehicleDriverEntry             | bool                     |             |
| shouldTargetExtraPlayerInDoublePlayerEvent | bool                     |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerCameraEntityData](/vext/ref/fb/playercameraentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
