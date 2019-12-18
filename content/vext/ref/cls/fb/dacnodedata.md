---
title: DacNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| DacNodeData()                                                          | Create a new instance of this container type.                                                                 |
| DacNodeData(DacNodeData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| DacNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [DacNodeData](DacNodeData).            |
| DacNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DacNodeData](DacNodeData). |

## Properties

| Name         | Type                                       | Description |
| ------------ | ------------------------------------------ | ----------- |
| inValue      | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| speakerCount | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| sampleRate   | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| vuPlugin     | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| gainPlugin   | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| dacPlugin    | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [DacNodeData](DacNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DacNodeData](DacNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
