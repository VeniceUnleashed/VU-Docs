---
title: RandomXYZEvaluatorData (Frostbite Container)
---
### Base Classes

[EvaluatorData](EvaluatorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| RandomXYZEvaluatorData()                                                          | Create a new instance of this container type.                                                                                       |
| RandomXYZEvaluatorData(RandomXYZEvaluatorData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| RandomXYZEvaluatorData([EvaluatorData](EvaluatorData) other)                      | Upcast an instance of type [EvaluatorData](EvaluatorData) to [RandomXYZEvaluatorData](RandomXYZEvaluatorData).                      |
| RandomXYZEvaluatorData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [RandomXYZEvaluatorData](RandomXYZEvaluatorData).        |
| RandomXYZEvaluatorData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RandomXYZEvaluatorData](RandomXYZEvaluatorData). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| maxX | number |             |
| minX | number |             |
| maxY | number |             |
| minY | number |             |
| maxZ | number |             |
| minZ | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [RandomXYZEvaluatorData](RandomXYZEvaluatorData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RandomXYZEvaluatorData](RandomXYZEvaluatorData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
