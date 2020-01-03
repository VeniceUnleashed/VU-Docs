---
title: ProcessorData
---
### Base Classes

[EmitterComponentData](/vext/ref/fb/emittercomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ProcessorData()                                                          | Create a new instance of this container type.                                                                     |
| ProcessorData(ProcessorData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| ProcessorData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [ProcessorData](/vext/ref/fb/processordata/).        |
| ProcessorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProcessorData](/vext/ref/fb/processordata/). |

## Properties

| Name           | Type                                         | Description |
| -------------- | -------------------------------------------- | ----------- |
| defaultValues  | [Vec4](/vext/ref/shared/class/vec4)            |             |
| nextProcessor  | [ProcessorData](/vext/ref/fb/processordata/)               |             |
| pre            | [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) |             |
| evaluatorInput | [EmittableField](/vext/ref/fb/emittablefield/)             |             |
| enable         | bool                                         |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [ProcessorData](/vext/ref/fb/processordata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProcessorData](/vext/ref/fb/processordata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
