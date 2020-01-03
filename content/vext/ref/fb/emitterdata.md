---
title: EmitterData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| EmitterData()                                                          | Create a new instance of this container type.                                                                 |
| EmitterData(EmitterData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| EmitterData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [EmitterData](/vext/ref/fb/emitterdata/).                      |
| EmitterData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [EmitterData](/vext/ref/fb/emitterdata/).        |
| EmitterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EmitterData](/vext/ref/fb/emitterdata/). |

## Properties

| Name          | Type                                   | Description |
| ------------- | -------------------------------------- | ----------- |
| emitterAssets | [EmitterDocument](/vext/ref/fb/emitterdocument/)\[\] |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [EmitterData](/vext/ref/fb/emitterdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EmitterData](/vext/ref/fb/emitterdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
