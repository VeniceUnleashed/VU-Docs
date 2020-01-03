---
title: SequenceGeneratorNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SequenceGeneratorNodeData()                                                          | Create a new instance of this container type.                                                                                             |
| SequenceGeneratorNodeData(SequenceGeneratorNodeData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SequenceGeneratorNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [SequenceGeneratorNodeData](/vext/ref/fb/sequencegeneratornodedata/).            |
| SequenceGeneratorNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SequenceGeneratorNodeData](/vext/ref/fb/sequencegeneratornodedata/). |

## Properties

| Name    | Type                                     | Description |
| ------- | ---------------------------------------- | ----------- |
| trigger | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| reset   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| min     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| max     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| step    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| value   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SequenceGeneratorNodeData](/vext/ref/fb/sequencegeneratornodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SequenceGeneratorNodeData](/vext/ref/fb/sequencegeneratornodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
