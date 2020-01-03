---
title: EmitterDocument
---
### Base Classes

[EmitterAsset](/vext/ref/fb/emitterasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| EmitterDocument()                                                          | Create a new instance of this container type.                                                                         |
| EmitterDocument(EmitterDocument other)                                     | Create a reference copy of an instance of the same type.                                                              |
| EmitterDocument([EmitterAsset](/vext/ref/fb/emitterasset/) other)                        | Upcast an instance of type [EmitterAsset](/vext/ref/fb/emitterasset/) to [EmitterDocument](/vext/ref/fb/emitterdocument/).                        |
| EmitterDocument([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [EmitterDocument](/vext/ref/fb/emitterdocument/).                                      |
| EmitterDocument([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EmitterDocument](/vext/ref/fb/emitterdocument/). |

## Properties

| Name          | Type                                       | Description |
| ------------- | ------------------------------------------ | ----------- |
| rootProcessor | [ProcessorData](/vext/ref/fb/processordata/)             |             |
| templateData  | [EmitterTemplateData](/vext/ref/fb/emittertemplatedata/) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [EmitterDocument](/vext/ref/fb/emitterdocument/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EmitterDocument](/vext/ref/fb/emitterdocument/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
