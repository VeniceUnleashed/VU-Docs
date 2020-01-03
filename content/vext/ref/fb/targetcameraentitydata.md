---
title: TargetCameraEntityData
---
### Base Classes

[CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| TargetCameraEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| TargetCameraEntityData(TargetCameraEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| TargetCameraEntityData([CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/) other)        | Upcast an instance of type [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/) to [TargetCameraEntityData](/vext/ref/fb/targetcameraentitydata/).        |
| TargetCameraEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [TargetCameraEntityData](/vext/ref/fb/targetcameraentitydata/).              |
| TargetCameraEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TargetCameraEntityData](/vext/ref/fb/targetcameraentitydata/).                            |
| TargetCameraEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TargetCameraEntityData](/vext/ref/fb/targetcameraentitydata/).                    |
| TargetCameraEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TargetCameraEntityData](/vext/ref/fb/targetcameraentitydata/).              |
| TargetCameraEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TargetCameraEntityData](/vext/ref/fb/targetcameraentitydata/). |

## Properties

| Name   | Type                                 | Description |
| ------ | ------------------------------------ | ----------- |
| camera | [TargetCameraData](/vext/ref/fb/targetcameradata/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TargetCameraEntityData](/vext/ref/fb/targetcameraentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TargetCameraEntityData](/vext/ref/fb/targetcameraentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
