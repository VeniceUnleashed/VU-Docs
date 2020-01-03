---
title: CameraRecoilData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| CameraRecoilData()                                                          | Create a new instance of this container type.                                                                           |
| CameraRecoilData(CameraRecoilData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| CameraRecoilData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraRecoilData](CameraRecoilData). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| springConstant          | number |             |
| springDamping           | number |             |
| springMinThresholdAngle | number |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [CameraRecoilData](CameraRecoilData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraRecoilData](CameraRecoilData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
