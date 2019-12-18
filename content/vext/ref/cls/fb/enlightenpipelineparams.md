---
title: EnlightenPipelineParams (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenPipelineParams()                                                          | Create a new instance of this container type.                                                                                         |
| EnlightenPipelineParams(EnlightenPipelineParams other)                             | Create a reference copy of an instance of the same type.                                                                              |
| EnlightenPipelineParams([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EnlightenPipelineParams](EnlightenPipelineParams). |

## Properties

| Name          | Type | Description |
| ------------- | ---- | ----------- |
| dynamicEnable | bool |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EnlightenPipelineParams](EnlightenPipelineParams) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EnlightenPipelineParams](EnlightenPipelineParams) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
