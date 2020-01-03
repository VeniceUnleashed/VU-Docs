---
title: BoxEvaluatorData
---
### Base Classes

[EvaluatorData](/vext/ref/fb/evaluatordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| BoxEvaluatorData()                                                          | Create a new instance of this container type.                                                                           |
| BoxEvaluatorData(BoxEvaluatorData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| BoxEvaluatorData([EvaluatorData](/vext/ref/fb/evaluatordata/) other)                      | Upcast an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata/) to [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata/).                      |
| BoxEvaluatorData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata/).        |
| BoxEvaluatorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata/). |

## Properties

| Name       | Type                              | Description |
| ---------- | --------------------------------- | ----------- |
| dimensions | [Vec3](/vext/ref/shared/class/vec3) |             |
| pivot      | [Vec3](/vext/ref/shared/class/vec3) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
