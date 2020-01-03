---
title: EvaluatorData
---
### Base Classes

[EmitterComponentData](/vext/ref/fb/emittercomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| EvaluatorData()                                                          | Create a new instance of this container type.                                                                     |
| EvaluatorData(EvaluatorData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| EvaluatorData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [EvaluatorData](/vext/ref/fb/evaluatordata/).        |
| EvaluatorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EvaluatorData](/vext/ref/fb/evaluatordata/). |

## Properties

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| emitterParameter | [EmitterParameter](/vext/ref/fb/emitterparameter/) |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [EvaluatorData](/vext/ref/fb/evaluatordata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EvaluatorData](/vext/ref/fb/evaluatordata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
