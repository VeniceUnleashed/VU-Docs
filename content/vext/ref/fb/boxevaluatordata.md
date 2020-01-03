---
title: BoxEvaluatorData
---
### Base Classes

[EvaluatorData](EvaluatorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| BoxEvaluatorData()                                                          | Create a new instance of this container type.                                                                           |
| BoxEvaluatorData(BoxEvaluatorData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| BoxEvaluatorData([EvaluatorData](EvaluatorData) other)                      | Upcast an instance of type [EvaluatorData](EvaluatorData) to [BoxEvaluatorData](BoxEvaluatorData).                      |
| BoxEvaluatorData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [BoxEvaluatorData](BoxEvaluatorData).        |
| BoxEvaluatorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoxEvaluatorData](BoxEvaluatorData). |

## Properties

| Name       | Type                              | Description |
| ---------- | --------------------------------- | ----------- |
| dimensions | [Vec3](/vext/ref/shared/class/vec3) |             |
| pivot      | [Vec3](/vext/ref/shared/class/vec3) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [BoxEvaluatorData](BoxEvaluatorData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BoxEvaluatorData](BoxEvaluatorData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
