---
title: CameraEntityData (Frostbite Container)
---
### Base Classes

[CameraEntityBaseData](CameraEntityBaseData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| CameraEntityData()                                                          | Create a new instance of this container type.                                                                           |
| CameraEntityData(CameraEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| CameraEntityData([CameraEntityBaseData](CameraEntityBaseData) other)        | Upcast an instance of type [CameraEntityBaseData](CameraEntityBaseData) to [CameraEntityData](CameraEntityData).        |
| CameraEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [CameraEntityData](CameraEntityData).              |
| CameraEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CameraEntityData](CameraEntityData).                            |
| CameraEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CameraEntityData](CameraEntityData).                    |
| CameraEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CameraEntityData](CameraEntityData).              |
| CameraEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CameraEntityData](CameraEntityData). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| fov  | number |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [CameraEntityData](CameraEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CameraEntityData](CameraEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
