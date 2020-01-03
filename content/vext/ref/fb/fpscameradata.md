---
title: FPSCameraData
---
### Base Classes

[TargetCameraData](TargetCameraData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| FPSCameraData()                                                          | Create a new instance of this container type.                                                                     |
| FPSCameraData(FPSCameraData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| FPSCameraData([TargetCameraData](TargetCameraData) other)                | Upcast an instance of type [TargetCameraData](TargetCameraData) to [FPSCameraData](FPSCameraData).                |
| FPSCameraData([CameraData](CameraData) other)                            | Upcast an instance of type [CameraData](CameraData) to [FPSCameraData](FPSCameraData).                            |
| FPSCameraData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FPSCameraData](FPSCameraData).                    |
| FPSCameraData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FPSCameraData](FPSCameraData).              |
| FPSCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FPSCameraData](FPSCameraData). |

## Properties

| Name               | Type                             | Description |
| ------------------ | -------------------------------- | ----------- |
| turnEffectSettings | [TurnEffectData](TurnEffectData) |             |
| blurEffectSettings | [BlurEffectData](BlurEffectData) |             |
| fov                | number                           |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [FPSCameraData](FPSCameraData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FPSCameraData](FPSCameraData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
