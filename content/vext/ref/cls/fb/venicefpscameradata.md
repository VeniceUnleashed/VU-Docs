---
title: VeniceFPSCameraData (Frostbite Container)
---
### Base Classes

[FPSCameraData](FPSCameraData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| VeniceFPSCameraData()                                                          | Create a new instance of this container type.                                                                                 |
| VeniceFPSCameraData(VeniceFPSCameraData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| VeniceFPSCameraData([FPSCameraData](FPSCameraData) other)                      | Upcast an instance of type [FPSCameraData](FPSCameraData) to [VeniceFPSCameraData](VeniceFPSCameraData).                      |
| VeniceFPSCameraData([TargetCameraData](TargetCameraData) other)                | Upcast an instance of type [TargetCameraData](TargetCameraData) to [VeniceFPSCameraData](VeniceFPSCameraData).                |
| VeniceFPSCameraData([CameraData](CameraData) other)                            | Upcast an instance of type [CameraData](CameraData) to [VeniceFPSCameraData](VeniceFPSCameraData).                            |
| VeniceFPSCameraData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VeniceFPSCameraData](VeniceFPSCameraData).                    |
| VeniceFPSCameraData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VeniceFPSCameraData](VeniceFPSCameraData).              |
| VeniceFPSCameraData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VeniceFPSCameraData](VeniceFPSCameraData). |

## Properties

| Name                            | Type   | Description |
| ------------------------------- | ------ | ----------- |
| suppressionBlurAmountMultiplier | number |             |
| suppressionBlurSizeMultiplier   | number |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceFPSCameraData](VeniceFPSCameraData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VeniceFPSCameraData](VeniceFPSCameraData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
