---
title: CameraParamsComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| CameraParamsComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| CameraParamsComponentData(CameraParamsComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| CameraParamsComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [CameraParamsComponentData](CameraParamsComponentData).                      |
| CameraParamsComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CameraParamsComponentData](CameraParamsComponentData).                    |
| CameraParamsComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CameraParamsComponentData](CameraParamsComponentData).              |
| CameraParamsComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CameraParamsComponentData](CameraParamsComponentData). |

## Properties

| Name                     | Type   | Description |
| ------------------------ | ------ | ----------- |
| viewDistance             | number |             |
| nearPlane                | number |             |
| sunShadowmapViewDistance | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CameraParamsComponentData](CameraParamsComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CameraParamsComponentData](CameraParamsComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
