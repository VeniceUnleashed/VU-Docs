---
title: RandomEvaluatorData
---
### Base Classes

[EvaluatorData](/vext/ref/fb/evaluatordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| RandomEvaluatorData()                                                          | Create a new instance of this container type.                                                                                 |
| RandomEvaluatorData(RandomEvaluatorData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| RandomEvaluatorData([EvaluatorData](/vext/ref/fb/evaluatordata/) other)                      | Upcast an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata/) to [RandomEvaluatorData](/vext/ref/fb/randomevaluatordata/).                      |
| RandomEvaluatorData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [RandomEvaluatorData](/vext/ref/fb/randomevaluatordata/).        |
| RandomEvaluatorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RandomEvaluatorData](/vext/ref/fb/randomevaluatordata/). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| max  | number |             |
| min  | number |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [RandomEvaluatorData](/vext/ref/fb/randomevaluatordata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RandomEvaluatorData](/vext/ref/fb/randomevaluatordata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
