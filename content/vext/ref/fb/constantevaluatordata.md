---
title: ConstantEvaluatorData
---
### Base Classes

[EvaluatorData](EvaluatorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ConstantEvaluatorData()                                                          | Create a new instance of this container type.                                                                                     |
| ConstantEvaluatorData(ConstantEvaluatorData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| ConstantEvaluatorData([EvaluatorData](EvaluatorData) other)                      | Upcast an instance of type [EvaluatorData](EvaluatorData) to [ConstantEvaluatorData](ConstantEvaluatorData).                      |
| ConstantEvaluatorData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [ConstantEvaluatorData](ConstantEvaluatorData).        |
| ConstantEvaluatorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ConstantEvaluatorData](ConstantEvaluatorData). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| scale | number |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [ConstantEvaluatorData](ConstantEvaluatorData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ConstantEvaluatorData](ConstantEvaluatorData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
