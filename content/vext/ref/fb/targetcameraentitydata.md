---
title: TargetCameraEntityData
---
### Base Classes

[CameraEntityBaseData](CameraEntityBaseData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| TargetCameraEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| TargetCameraEntityData(TargetCameraEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| TargetCameraEntityData([CameraEntityBaseData](CameraEntityBaseData) other)        | Upcast an instance of type [CameraEntityBaseData](CameraEntityBaseData) to [TargetCameraEntityData](TargetCameraEntityData).        |
| TargetCameraEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [TargetCameraEntityData](TargetCameraEntityData).              |
| TargetCameraEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TargetCameraEntityData](TargetCameraEntityData).                            |
| TargetCameraEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TargetCameraEntityData](TargetCameraEntityData).                    |
| TargetCameraEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TargetCameraEntityData](TargetCameraEntityData).              |
| TargetCameraEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TargetCameraEntityData](TargetCameraEntityData). |

## Properties

| Name   | Type                                 | Description |
| ------ | ------------------------------------ | ----------- |
| camera | [TargetCameraData](TargetCameraData) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TargetCameraEntityData](TargetCameraEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TargetCameraEntityData](TargetCameraEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
