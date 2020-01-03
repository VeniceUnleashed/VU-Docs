---
title: CameraEntityBaseData
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| CameraEntityBaseData()                                                          | Create a new instance of this container type.                                                                                   |
| CameraEntityBaseData(CameraEntityBaseData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| CameraEntityBaseData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [CameraEntityBaseData](CameraEntityBaseData).              |
| CameraEntityBaseData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CameraEntityBaseData](CameraEntityBaseData).                            |
| CameraEntityBaseData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CameraEntityBaseData](CameraEntityBaseData).                    |
| CameraEntityBaseData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CameraEntityBaseData](CameraEntityBaseData).              |
| CameraEntityBaseData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraEntityBaseData](CameraEntityBaseData). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| nameId   | string |             |
| priority | number |             |
| enabled  | bool   |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [CameraEntityBaseData](CameraEntityBaseData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraEntityBaseData](CameraEntityBaseData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
