---
title: SphereEvaluatorData
---
### Base Classes

[EvaluatorData](/vext/ref/fb/evaluatordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| SphereEvaluatorData()                                                          | Create a new instance of this container type.                                                                                 |
| SphereEvaluatorData(SphereEvaluatorData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| SphereEvaluatorData([EvaluatorData](/vext/ref/fb/evaluatordata/) other)                      | Upcast an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata/) to [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata/).                      |
| SphereEvaluatorData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata/).        |
| SphereEvaluatorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata/). |

## Properties

| Name   | Type                              | Description |
| ------ | --------------------------------- | ----------- |
| scale  | [Vec3](/vext/ref/shared/class/vec3) |             |
| pivot  | [Vec3](/vext/ref/shared/class/vec3) |             |
| radius | number                            |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
