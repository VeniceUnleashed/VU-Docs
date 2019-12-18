---
title: ProcessorData (Frostbite Container)
---
### Base Classes

[EmitterComponentData](EmitterComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ProcessorData()                                                          | Create a new instance of this container type.                                                                     |
| ProcessorData(ProcessorData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| ProcessorData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [ProcessorData](ProcessorData).        |
| ProcessorData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ProcessorData](ProcessorData). |

## Properties

| Name           | Type                                         | Description |
| -------------- | -------------------------------------------- | ----------- |
| defaultValues  | [Vec4](/vext/ref/cls/shr/Vec4)            |             |
| nextProcessor  | [ProcessorData](ProcessorData)               |             |
| pre            | [EmitterComponentData](EmitterComponentData) |             |
| evaluatorInput | [EmittableField](EmittableField)             |             |
| enable         | bool                                         |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [ProcessorData](ProcessorData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ProcessorData](ProcessorData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
