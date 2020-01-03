---
title: BaseEmitterData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| BaseEmitterData()                                                          | Create a new instance of this container type.                                                                         |
| BaseEmitterData(BaseEmitterData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| BaseEmitterData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [BaseEmitterData](/vext/ref/fb/baseemitterdata/).                      |
| BaseEmitterData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [BaseEmitterData](/vext/ref/fb/baseemitterdata/).        |
| BaseEmitterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BaseEmitterData](/vext/ref/fb/baseemitterdata/). |

## Properties

| Name         | Type                               | Description |
| ------------ | ---------------------------------- | ----------- |
| emitterAsset | [EmitterDocument](/vext/ref/fb/emitterdocument/) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [BaseEmitterData](/vext/ref/fb/baseemitterdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BaseEmitterData](/vext/ref/fb/baseemitterdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
