---
title: SimpleTransformNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| SimpleTransformNodeData()                                                          | Create a new instance of this container type.                                                                                         |
| SimpleTransformNodeData(SimpleTransformNodeData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| SimpleTransformNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [SimpleTransformNodeData](/vext/ref/fb/simpletransformnodedata/).            |
| SimpleTransformNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SimpleTransformNodeData](/vext/ref/fb/simpletransformnodedata/). |

## Properties

| Name      | Type                                                 | Description |
| --------- | ---------------------------------------------------- | ----------- |
| x         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)             |             |
| y         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)             |             |
| z         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)             |             |
| operation | [SimpleTransformOperation](/vext/ref/fb/simpletransformoperation/) |             |
| angleUnit | [AngleUnit](/vext/ref/fb/angleunit/)                               |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SimpleTransformNodeData](/vext/ref/fb/simpletransformnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SimpleTransformNodeData](/vext/ref/fb/simpletransformnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
