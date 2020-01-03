---
title: RandomXYZEvaluatorData
---
### Base Classes

[EvaluatorData](/vext/ref/fb/evaluatordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| RandomXYZEvaluatorData()                                                          | Create a new instance of this container type.                                                                                       |
| RandomXYZEvaluatorData(RandomXYZEvaluatorData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| RandomXYZEvaluatorData([EvaluatorData](/vext/ref/fb/evaluatordata/) other)                      | Upcast an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata/) to [RandomXYZEvaluatorData](/vext/ref/fb/randomxyzevaluatordata/).                      |
| RandomXYZEvaluatorData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [RandomXYZEvaluatorData](/vext/ref/fb/randomxyzevaluatordata/).        |
| RandomXYZEvaluatorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RandomXYZEvaluatorData](/vext/ref/fb/randomxyzevaluatordata/). |

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
| [RandomXYZEvaluatorData](/vext/ref/fb/randomxyzevaluatordata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RandomXYZEvaluatorData](/vext/ref/fb/randomxyzevaluatordata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
