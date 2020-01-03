---
title: CameraEntityData
---
### Base Classes

[CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| CameraEntityData()                                                          | Create a new instance of this container type.                                                                           |
| CameraEntityData(CameraEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| CameraEntityData([CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/) other)        | Upcast an instance of type [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/) to [CameraEntityData](/vext/ref/fb/cameraentitydata/).        |
| CameraEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [CameraEntityData](/vext/ref/fb/cameraentitydata/).              |
| CameraEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CameraEntityData](/vext/ref/fb/cameraentitydata/).                            |
| CameraEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CameraEntityData](/vext/ref/fb/cameraentitydata/).                    |
| CameraEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CameraEntityData](/vext/ref/fb/cameraentitydata/).              |
| CameraEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraEntityData](/vext/ref/fb/cameraentitydata/). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| fov  | number |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [CameraEntityData](/vext/ref/fb/cameraentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraEntityData](/vext/ref/fb/cameraentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
