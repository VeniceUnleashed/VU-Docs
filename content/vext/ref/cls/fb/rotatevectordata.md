---
title: RotateVectorData (Frostbite Container)
---
### Base Classes

[EvaluatorData](EvaluatorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| RotateVectorData()                                                          | Create a new instance of this container type.                                                                           |
| RotateVectorData(RotateVectorData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| RotateVectorData([EvaluatorData](EvaluatorData) other)                      | Upcast an instance of type [EvaluatorData](EvaluatorData) to [RotateVectorData](RotateVectorData).                      |
| RotateVectorData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [RotateVectorData](RotateVectorData).        |
| RotateVectorData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RotateVectorData](RotateVectorData). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| angle             | number |             |
| rotateWithinPlane | bool   |             |
| inputAffectsPhi   | bool   |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [RotateVectorData](RotateVectorData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RotateVectorData](RotateVectorData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
