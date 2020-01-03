---
title: CameraEntityBaseData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| CameraEntityBaseData()                                                          | Create a new instance of this container type.                                                                                   |
| CameraEntityBaseData(CameraEntityBaseData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| CameraEntityBaseData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/).              |
| CameraEntityBaseData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/).                            |
| CameraEntityBaseData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/).                    |
| CameraEntityBaseData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/).              |
| CameraEntityBaseData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| nameId   | string |             |
| priority | number |             |
| enabled  | bool   |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraEntityBaseData](/vext/ref/fb/cameraentitybasedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
