---
title: RotateVectorData
---
### Base Classes

[EvaluatorData](/vext/ref/fb/evaluatordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| RotateVectorData()                                                          | Create a new instance of this container type.                                                                           |
| RotateVectorData(RotateVectorData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| RotateVectorData([EvaluatorData](/vext/ref/fb/evaluatordata/) other)                      | Upcast an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata/) to [RotateVectorData](/vext/ref/fb/rotatevectordata/).                      |
| RotateVectorData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [RotateVectorData](/vext/ref/fb/rotatevectordata/).        |
| RotateVectorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RotateVectorData](/vext/ref/fb/rotatevectordata/). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| angle             | number |             |
| rotateWithinPlane | bool   |             |
| inputAffectsPhi   | bool   |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [RotateVectorData](/vext/ref/fb/rotatevectordata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RotateVectorData](/vext/ref/fb/rotatevectordata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
