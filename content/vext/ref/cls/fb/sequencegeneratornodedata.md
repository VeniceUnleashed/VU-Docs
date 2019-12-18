---
title: SequenceGeneratorNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SequenceGeneratorNodeData()                                                          | Create a new instance of this container type.                                                                                             |
| SequenceGeneratorNodeData(SequenceGeneratorNodeData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SequenceGeneratorNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [SequenceGeneratorNodeData](SequenceGeneratorNodeData).            |
| SequenceGeneratorNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SequenceGeneratorNodeData](SequenceGeneratorNodeData). |

## Properties

| Name    | Type                                     | Description |
| ------- | ---------------------------------------- | ----------- |
| trigger | [AudioGraphNodePort](AudioGraphNodePort) |             |
| reset   | [AudioGraphNodePort](AudioGraphNodePort) |             |
| min     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| max     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| step    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| value   | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SequenceGeneratorNodeData](SequenceGeneratorNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SequenceGeneratorNodeData](SequenceGeneratorNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
