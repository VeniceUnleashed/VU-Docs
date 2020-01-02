---
title: EmitterDocument
---
### Base Classes

[EmitterAsset](EmitterAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| EmitterDocument()                                                          | Create a new instance of this container type.                                                                         |
| EmitterDocument(EmitterDocument other)                                     | Create a reference copy of an instance of the same type.                                                              |
| EmitterDocument([EmitterAsset](EmitterAsset) other)                        | Upcast an instance of type [EmitterAsset](EmitterAsset) to [EmitterDocument](EmitterDocument).                        |
| EmitterDocument([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [EmitterDocument](EmitterDocument).                                      |
| EmitterDocument([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EmitterDocument](EmitterDocument). |

## Properties

| Name          | Type                                       | Description |
| ------------- | ------------------------------------------ | ----------- |
| rootProcessor | [ProcessorData](ProcessorData)             |             |
| templateData  | [EmitterTemplateData](EmitterTemplateData) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [EmitterDocument](EmitterDocument) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EmitterDocument](EmitterDocument) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
