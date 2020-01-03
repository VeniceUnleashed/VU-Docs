---
title: RandomEvaluatorData
---
### Base Classes

[EvaluatorData](EvaluatorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| RandomEvaluatorData()                                                          | Create a new instance of this container type.                                                                                 |
| RandomEvaluatorData(RandomEvaluatorData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| RandomEvaluatorData([EvaluatorData](EvaluatorData) other)                      | Upcast an instance of type [EvaluatorData](EvaluatorData) to [RandomEvaluatorData](RandomEvaluatorData).                      |
| RandomEvaluatorData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [RandomEvaluatorData](RandomEvaluatorData).        |
| RandomEvaluatorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RandomEvaluatorData](RandomEvaluatorData). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| max  | number |             |
| min  | number |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [RandomEvaluatorData](RandomEvaluatorData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RandomEvaluatorData](RandomEvaluatorData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
