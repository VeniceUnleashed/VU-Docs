---
title: LookAtCameraEntityData
---
### Base Classes

[CameraEntityData](/vext/ref/fb/cameraentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| LookAtCameraEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| LookAtCameraEntityData(LookAtCameraEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| LookAtCameraEntityData([CameraEntityData](/vext/ref/fb/cameraentitydata/) other)                | Upcast an instance of type [CameraEntityData](/vext/ref/fb/cameraentitydata/) to [LookAtCameraEntityData](/vext/ref/fb/lookatcameraentitydata/).                |
| LookAtCameraEntityData([CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/) other)        | Upcast an instance of type [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/) to [LookAtCameraEntityData](/vext/ref/fb/lookatcameraentitydata/).        |
| LookAtCameraEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [LookAtCameraEntityData](/vext/ref/fb/lookatcameraentitydata/).              |
| LookAtCameraEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [LookAtCameraEntityData](/vext/ref/fb/lookatcameraentitydata/).                            |
| LookAtCameraEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LookAtCameraEntityData](/vext/ref/fb/lookatcameraentitydata/).                    |
| LookAtCameraEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LookAtCameraEntityData](/vext/ref/fb/lookatcameraentitydata/).              |
| LookAtCameraEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LookAtCameraEntityData](/vext/ref/fb/lookatcameraentitydata/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LookAtCameraEntityData](/vext/ref/fb/lookatcameraentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LookAtCameraEntityData](/vext/ref/fb/lookatcameraentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
