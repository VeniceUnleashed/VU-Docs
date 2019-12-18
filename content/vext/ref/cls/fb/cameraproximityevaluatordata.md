---
title: CameraProximityEvaluatorData (Frostbite Container)
---
### Base Classes

[EvaluatorData](EvaluatorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| CameraProximityEvaluatorData()                                                          | Create a new instance of this container type.                                                                                                   |
| CameraProximityEvaluatorData(CameraProximityEvaluatorData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| CameraProximityEvaluatorData([EvaluatorData](EvaluatorData) other)                      | Upcast an instance of type [EvaluatorData](EvaluatorData) to [CameraProximityEvaluatorData](CameraProximityEvaluatorData).                      |
| CameraProximityEvaluatorData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [CameraProximityEvaluatorData](CameraProximityEvaluatorData).        |
| CameraProximityEvaluatorData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CameraProximityEvaluatorData](CameraProximityEvaluatorData). |

## Properties

| Name                 | Type                              | Description |
| -------------------- | --------------------------------- | ----------- |
| size                 | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| offset               | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| innerRadiusDirection | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| innerRadius          | number                            |             |
| forwardOffset        | number                            |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CameraProximityEvaluatorData](CameraProximityEvaluatorData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CameraProximityEvaluatorData](CameraProximityEvaluatorData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
