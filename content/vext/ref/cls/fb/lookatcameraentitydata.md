---
title: LookAtCameraEntityData (Frostbite Container)
---
### Base Classes

[CameraEntityData](CameraEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| LookAtCameraEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| LookAtCameraEntityData(LookAtCameraEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| LookAtCameraEntityData([CameraEntityData](CameraEntityData) other)                | Upcast an instance of type [CameraEntityData](CameraEntityData) to [LookAtCameraEntityData](LookAtCameraEntityData).                |
| LookAtCameraEntityData([CameraEntityBaseData](CameraEntityBaseData) other)        | Upcast an instance of type [CameraEntityBaseData](CameraEntityBaseData) to [LookAtCameraEntityData](LookAtCameraEntityData).        |
| LookAtCameraEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [LookAtCameraEntityData](LookAtCameraEntityData).              |
| LookAtCameraEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [LookAtCameraEntityData](LookAtCameraEntityData).                            |
| LookAtCameraEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LookAtCameraEntityData](LookAtCameraEntityData).                    |
| LookAtCameraEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LookAtCameraEntityData](LookAtCameraEntityData).              |
| LookAtCameraEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LookAtCameraEntityData](LookAtCameraEntityData). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LookAtCameraEntityData](LookAtCameraEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LookAtCameraEntityData](LookAtCameraEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
