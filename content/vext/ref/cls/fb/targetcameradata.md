---
title: TargetCameraData (Frostbite Container)
---
### Base Classes

[CameraData](CameraData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| TargetCameraData()                                                          | Create a new instance of this container type.                                                                           |
| TargetCameraData(TargetCameraData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| TargetCameraData([CameraData](CameraData) other)                            | Upcast an instance of type [CameraData](CameraData) to [TargetCameraData](TargetCameraData).                            |
| TargetCameraData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TargetCameraData](TargetCameraData).                    |
| TargetCameraData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TargetCameraData](TargetCameraData).              |
| TargetCameraData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TargetCameraData](TargetCameraData). |

## Properties

| Name    | Type                         | Description |
| ------- | ---------------------------- | ----------- |
| hud     | [HudData](HudData)           |             |
| uiParts | [UIPartData](UIPartData)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [TargetCameraData](TargetCameraData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TargetCameraData](TargetCameraData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
